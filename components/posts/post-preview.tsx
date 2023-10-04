import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import ReadTime from './read-time';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  restaurant_review_fields,
  slug
}) {
  const { readTime, restaurantLocation } = restaurant_review_fields;
  return (
    <div className={'group'}>
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      )}

      <h3 className=" mt-3 mb-3 text-2xl leading-snug">
        <Link
          href={`/news/${slug}`}
          className=" group-hover:underline text-inherit"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>

      <div
        className=" text-sm leading-relaxed my-0 mt-1 py-0 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <ReadTime time={readTime} />
    </div>
  );
}
