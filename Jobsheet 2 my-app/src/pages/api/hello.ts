// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Mendefinisikan tipe data respons
type Data = {
  name: string,
  alamat: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Mengirimkan respons JSON dengan status 200 (OK)
  res.status(200).json({ 
    name: 'John Doe',alamat:'jl.suka suka no 1'
  })
}