import Head from 'next/head'
import Image from 'next/image'

import Layout from 'components/layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <h1 className="mt-20 font-serif font-normal text-7xl text-otgopurple-dark text-center ">
        404 Error
      </h1>
      <p className="text-center">
        A disaster. We can’t find that page.
        <br />
        It might be an old link, or it might have moved!
      </p>
      <div className="text-center mt-12">
        <Image src="/images/orange.png" width={200} height={246} />
      </div>
    </Layout>
  )
}
