import Date from './date'
import Link from 'next/link'
import Image from 'next/image'

import CoverImage from 'components/cover-image'

type CoverImage = {
  sourceUrl: string
}

type PostProps = {
  key: string
  title: string
  coverImage: CoverImage
  date: string
  slug: string
  excerpt: string
}

export default function PostPreview({ title, coverImage, date, excerpt, slug }: PostProps) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div
          className="relative cursor-pointer text-otgowhite hover:text-otgoorange-light duration-200 h-preview"
          // style={{ backgroundImage: `url('${coverImage?.sourceUrl}')` }}
        >
          {coverImage && (
            <Image
              src={coverImage.sourceUrl}
              // width={477}
              // height={200}
              layout="fill"
              objectFit="cover"
              quality={10}
              // sizes="(all) 200px"
              aria-hidden="true"
            />
          )}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-otgopurple-dark bg-opacity-75 flex flex-col justify-center items-center w-full h-1/2 text-center">
            <h3 className="text-xl leading-snug">
              <a className="hover:none" dangerouslySetInnerHTML={{ __html: title }}></a>
            </h3>

            <div className="text-sm">
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </Link>

      <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}
