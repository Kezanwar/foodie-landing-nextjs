import React, { FC, useEffect } from 'react';
import { SvgColor } from '../svg-color';
import { Box, Typography } from '@mui/material';

type Props = {
  color: string;
  title: string;
  copy: string;
  icon: string;
  deviceIsMob?: boolean;
};

const BlurIcon: FC<Props> = ({ color, title, copy, icon, deviceIsMob }) => {
  return (
    <div>
      <div className="p-12 pb-2 relative max-h-[300px] max-w-[300px] mx-auto text-red flex items-center justify-center">
        <Box
          className={`absolute h-[70%] w-[70%] xl:h-[90%] xl:w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 lg:opacity-[0.15] ${
            deviceIsMob ? 'blur-[40px] opacity-30' : 'opacity-30 blur-[60px]'
          } lg:blur-[80px] z-0`}
          sx={{ backgroundColor: color }}
        />
        <img className="h-[100%] w-[100%] z-10" src={icon} alt="svg" />
      </div>

      <div className="text-center flex flex-col items-center justify-center">
        <Typography fontSize={'24px!important'} mb={2} variant="h3">
          {title}
        </Typography>
        <Typography
          width={'90%'}
          textAlign={'center'}
          color={'text.secondary'}
          variant="body1"
        >
          {copy}
        </Typography>
      </div>
    </div>
  );
};

export default BlurIcon;
