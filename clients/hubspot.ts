

export async function collectEmail(email: string) {
  const url =
  'https://api.hsforms.com/submissions/v3/integration/submit/43160068/fbcc65ed-18f3-4220-a8b6-39d3c70c5f9d'
  const promise = new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submittedAt: new Date(),
          fields: [
            {
              objectTypeId: '0-1',
              name: 'email',
              value: email,
            },
          ],
        }),
      })
      resolve(res)
    } catch (e) {
      reject(e)
    }
  })
  return promise
}

export async function collectMessage(messageObject: {
  email: string,
  firstname: string,
  lastname: string,
  message: string
}){
  const url =
  'https://api.hsforms.com/submissions/v3/integration/submit/43160068/e08c7507-8732-4763-83d1-ef814dfbf800'
  const promise = new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submittedAt: new Date(),
          fields: [
            {
              objectTypeId: '0-1',
              name: 'email',
              value: messageObject.email,
            },
            {
              objectTypeId: '0-1',
              name: 'firstname',
              value: messageObject.firstname,
            },
            {
              objectTypeId: '0-1',
              name: 'lastname',
              value: messageObject.lastname,
            },
            {
              objectTypeId: '0-1',
              name: 'message',
              value: messageObject.message,
            },
          ],
        }),
      })
      resolve(res)
    } catch (e) {
      reject(e)
    }
  })
  return promise
}