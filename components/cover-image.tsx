import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug }) {
  console.log(coverImage)
  // const image = (
  //   <img
  //     src={coverImage?.sourceUrl}
  //     className={cn('shadow-small', {
  //       'hover:shadow-medium transition-shadow duration-200 object-cover w-full absolute top-1/2 transform -translate-y-1/2': slug,
  //     })}
  //   />
  // )
  // return (
  //   <div className="sm:mx-0">
  //     {slug ? (
  //       <Link as={`/posts/${slug}`} href="/posts/[slug]">
  //         <a aria-label={title}>{image}</a>
  //       </Link>
  //     ) : (
  //       image
  //     )}
  //   </div>
  // )
  // return <Image src={coverImage?.sourceUrl} layout="fill" objectFit="cover" />
  return (
    <Image
      src={coverImage?.sourceUrl}
      width={477}
      height={200}
      layout="responsive"
      objectFit="cover"
    />
  )
}
