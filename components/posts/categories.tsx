import { Chip } from '@mui/material';

export default function Categories({ categories }) {
  console.log(categories);
  return (
    <div className="flex items-center gap-2">
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <Chip label={category.node.name} key={index} />
        ))
      ) : (
        <Chip>{categories.edges.node.name}</Chip>
      )}
    </div>
  );
}
