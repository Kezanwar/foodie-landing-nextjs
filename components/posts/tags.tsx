import { Chip } from '@mui/material';

export default function Tags({ tags }) {
  return (
    <div className="flex items-center gap-2">
      {tags?.edges?.map((tag, index) => (
        <Chip label={tag.node.name} key={index} />
      ))}
    </div>
  );
}
