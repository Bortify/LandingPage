'use client'
import { MailIcon, PhoneIcon, Send } from 'lucide-react'
import Link from 'next/link'
import zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Container from '@/components/Container'
import Typography from '@/components/Typography'

import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import Fonts from '../Typography/Font'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useState } from 'react'
import Spinner from '../Spinner'
import { collectMessage } from '@/clients/hubspot'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

const formSchema = zod.object({
  email: zod.string().email('Email address is required'),
  firstname: zod.string().min(1, 'First Name should be valid'),
  lastname: zod.string().min(1, 'Last Name should be valid'),
  message: zod.string().min(5, 'Message should be valid'),
})

const ContactForm: React.FC<{}> = () => {
  const [load, setLoading] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: zod.infer<typeof formSchema>) {
    setLoading(true)
    try {
      await collectMessage(data)
      toast.success(`we've recieved your message`)
      form.reset()
    } catch (e) {
      toast.error(`Some error occured :(`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className='grid place-items-center'>
      <div className='w-full max-w-[690px]'>
        <Typography.Heading
          variant='h2'
          boldness={800}
          className='text-center mb-2.5'>
          Contact Us
        </Typography.Heading>
        <Typography.Content size='base' className='text-center text-gray-500'>
          {`Questions or ideas? We're just one message away. Send us your
        thoughts and our team will be in touch. Let's shape your e-commerce
        future together with our AI-chatbot solution!`}
        </Typography.Content>
        <div className='w-full mt-10 flex flex-col gap-5'>
          <div className='w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-5'>
            <Link href={'tel:+918766250132'}>
              <div className='flex items-center justify-center p-5 bg-white rounded-md shadow text-gray-400 gap-2'>
                <PhoneIcon className='w-4' /> +918766250132
              </div>
            </Link>
            <Link href={'mailto:hitenvats16@gmail.com'}>
              <div className='flex items-center justify-center p-5 bg-white rounded-md shadow text-gray-400 gap-2'>
                <MailIcon className='w-4' /> hitenvats16@gmail.com
              </div>
            </Link>
          </div>
          <div className='w-full bg-white rounded-md shadow p-5'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 grid-rows-3 gap-5 w-full mb-5'>
                  <FormField
                    control={form.control}
                    name='firstname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={Fonts.poppins}>
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your full name'
                            type='text'
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={Fonts.poppins}>
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your full name'
                            type='text'
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={Fonts.poppins}>
                          Your Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='Enter your email address'
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={Fonts.poppins}>
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className=' min-h-[160px]'
                          placeholder='Enter your Message'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className='w-full mt-5' disabled={load} type='submit'>
                  {load ? (
                    <Spinner size={5} />
                  ) : (
                    <>
                      Submit <Send className='w-4 ml-2' />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactForm
