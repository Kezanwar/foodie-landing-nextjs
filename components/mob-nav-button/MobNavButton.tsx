import { IconButton, IconButtonProps, styled } from '@mui/material';
import React from 'react';

type Props = {
  isOpen: boolean;
} & IconButtonProps;

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  color: theme.palette.grey[500],
  marginLeft: 'auto'
}));

const MobNavButton = (props: Props) => {
  return (
    <CustomIconButton {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g>
          <g>
            <g fill="currentColor">
              <circle cx="4" cy="12" r="1" />
              <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94" />
              <rect width="18" height="2" x="3" y="16" rx=".94" ry=".94" />
              <rect width="18" height="2" x="3" y="6" rx=".94" ry=".94" />
            </g>
          </g>
        </g>
      </svg>
    </CustomIconButton>
  );
};

export default MobNavButton;
