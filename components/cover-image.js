import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import {borderColorByType, urlRootByType} from '../lib/constants'

export default function CoverImage({ title, src, slug, height, width, type, format }) {
  var objectFit = (format === 'vertical') ? 'contain' : 'cover'

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
      objectFit= {objectFit}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${urlRootByType[type]}/${slug}`} href={`/${urlRootByType[type]}/[slug]`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}