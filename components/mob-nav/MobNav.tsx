import React, { FC } from 'react';
import { Drawer } from '@mui/material';
import { NavMenuMobile } from 'components/nav-menu';
import Logo from 'components/logo/Logo';
import Subheader from 'components/subheader';

const MOB_NAV_WIDTH = 268;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobNav: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        keepMounted: true
      }}
      PaperProps={{
        sx: {
          width: MOB_NAV_WIDTH
        }
      }}
    >
      <div className="p-4 py-6 flex flex-col">
        <Logo />

        <div className="mt-12">
          <Subheader text="Main menu" />
          <NavMenuMobile onNavPress={onClose} />
        </div>
      </div>
    </Drawer>
  );
};

export default MobNav;
