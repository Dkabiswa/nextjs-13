import prisma from '../prisma/client';
import Link from 'next/link';

const getPosts = async (): Promise<Post[]> => {
  const res = await prisma.post.findMany()
  return res
}

interface Post {
  id: number,
  title: string,
  published: boolean
}

export default async function Home() {
  const data = await getPosts()
  return (
    <main  className='py-8 px-48'>
      <Link className='bg-teal-700 text-black font-medium py-2 px-4' href={"/dashboard"}>
        Go to dashboard
      </Link>
      {data.map((d) => (<h1 className='text-large py-2'>{d.title}</h1>))}
    </main>
  )
}
