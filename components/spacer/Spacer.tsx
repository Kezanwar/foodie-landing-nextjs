import React from 'react';
import { Box } from '@mui/system';

type Props = {
  sp?: number;
};

const Spacer: React.FC<Props> = ({ sp = 4 }) => {
  return <Box my={sp} />;
};

export default Spacer;
