import { FC, forwardRef } from 'react';
import { Box, SxProps } from '@mui/material';

type Props = {
  name: string;
  sx?: SxProps;
};

const SvgColor: FC<Props> = forwardRef(({ name, sx, ...other }, ref) => {
  const src = `static/icons/ic/${name}.svg`;
  return (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx
      }}
      {...other}
    />
  );
});

export default SvgColor;
