import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import SectionSeparator from './section-separator';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-4 lg:mt-12 ">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 flex gap-3 items-center text-[14px] font-light">
        <Avatar author={author} /> <div className="h-4 w-[1px] bg-gray-200" />{' '}
        <Date dateString={date} />
      </div>
      <Categories categories={categories} />
      <SectionSeparator />
    </div>
  );
}
