import Image from 'next/image';

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 relative mr-3">
        <Image
          src={author.node.avatar.url}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          alt={name}
          unoptimized
        />
      </div>
      <div className="text-md capitalize">{name}</div>
    </div>
  );
}
