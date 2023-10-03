import { FC, forwardRef } from 'react';
import { Box, SxProps } from '@mui/material';
import Image from 'next/image';

type Props = {
  name: string;
  sx?: SxProps;
};

// eslint-disable-next-line react/display-name
const SvgColor: FC<Props> = forwardRef(({ name, sx, ...other }, ref) => {
  const src = `/static/icons/ic/${name}.svg`;
  return (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        color: 'currentcolor',
        ...sx
      }}
    >
      <Image height={24} alt="icon" width={24} src={src} />
    </Box>
  );
});

export default SvgColor;
