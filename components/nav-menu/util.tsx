import { ReactElement } from 'react';

import CustomerBag from 'components/icons/CustomerBag';
import Read from 'components/icons/Read';
import Store from 'components/icons/Store';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export type MenuOption = {
  link: string;
  text: string;
  icon: ReactElement;
};

export const NAV_MENU_OPTIONS: Array<MenuOption> = [
  {
    link: '/',
    icon: <CustomerBag />,
    text: 'Customers'
  },
  {
    link: '/partners',
    icon: <Store />,
    text: 'Partners'
  },
  {
    link: '/three-month-free-trial',
    icon: <AutoAwesomeOutlinedIcon />,
    text: 'Partner Free Trial'
  },
  {
    link: '/news',
    icon: <Read />,
    text: 'News & Insights'
  }
];
