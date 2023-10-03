import { Chip } from '@mui/material';

export default function Categories({ categories }) {
  console.log(categories);
  return (
    <span>
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <Chip key={index}>{category.node.name}</Chip>
        ))
      ) : (
        <Chip>{categories.edges.node.name}</Chip>
      )}
    </span>
  );
}
