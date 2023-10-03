export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-6"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
