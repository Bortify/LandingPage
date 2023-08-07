const url =
  'https://api.hsforms.com/submissions/v3/integration/submit/43160068/fbcc65ed-18f3-4220-a8b6-39d3c70c5f9d'

export async function collectEmail(email: string) {
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
