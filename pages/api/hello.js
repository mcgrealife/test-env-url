// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('api request received')
  res.status(200).json({ name: 'this is a response from the API' })
}
