'use client'

import * as zod from 'zod'
import Image from 'next/image'

import { zodResolver } from '@hookform/resolvers/zod'
import { collectEmail } from '@/clients/hubspot'
import { useForm } from 'react-hook-form'

import Container from '../Container'
import Typography from '../Typography'
import { Input } from '../ui/input'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Button } from '../ui/button'
import { useState } from 'react'
import Spinner from '../Spinner'
import { toast } from 'react-hot-toast'

const formSchema = zod.object({
  email: zod.string().email('Email is required.'),
})

const EmailCollectionBox: React.FC<{}> = () => {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const [loading, setLoading] = useState<boolean>(false)

  async function onSubmit(values: zod.infer<typeof formSchema>) {
    setLoading(true)
    try {
      await collectEmail(values.email)
      toast.success("We've recieved your email!")
      form.reset()
    } catch (e) {
      toast.error('Something Bad occured :(')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <div className='px-10 py-32 grid place-content-center relative overflow-hidden'>
        <div className='w-full max-w-[670px] h-max flex flex-col items-center justify-center'>
          <Typography.Heading
            variant='h3'
            className='text-center mb-5'
            boldness={800}>
            Liked Our Product? Join the Revolution Early!
          </Typography.Heading>
          <Typography.Content className='text-center mb-8'>
            Secure your spot now and enjoy an exclusive lifetime 40% discount
            when we officially launch. Embrace the revolution and transform your
            eCommerce business with no upfront payment. Be among the first to
            experience our AI-powered chatbot.
          </Typography.Content>
          <div className='w-full max-w-[600px] px-5 py-7 rounded-md shadow-md bg-white'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex flex-col gap-2.5'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Enter your email address'
                          required
                          type='email'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type='submit' disabled={loading}>
                  {loading ? <Spinner size={5}/> : 'Submit'}
                </Button>
                <span className='block text-center text-xs'>{`Your email is 100% confidential and won't send you any spam.`}</span>
              </form>
            </Form>
          </div>
        </div>
        <Image
          src={'/rainbow-effect.png'}
          width={1000}
          height={700}
          alt='rainbow'
          className='absolute top-0 left-1/2 -translate-x-1/2 -z-10'
        />
      </div>
    </Container>
  )
}

export default EmailCollectionBox
