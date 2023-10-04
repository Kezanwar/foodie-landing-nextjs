import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Read from 'components/icons/Read';
import React, { FC } from 'react';

type Props = {
  time: string;
};

const ReadTime: FC<Props> = ({ time }) => {
  return (
    <div className="flex items-center gap-1 mt-3">
      <Box display={'flex'} alignItems={'center'} color={'primary.main'}>
        <AccessTimeIcon fontSize="small" />
      </Box>{' '}
      <Typography color={'text.secondary'} fontSize={13} variant="body2">
        {time} minute read
      </Typography>
    </div>
  );
};

export default ReadTime;
