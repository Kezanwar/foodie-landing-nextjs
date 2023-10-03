import { ReactElement } from 'react';

import CustomerBag from 'components/icons/CustomerBag';
import Read from 'components/icons/Read';
import Store from 'components/icons/Store';

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
    link: '/news',
    icon: <Read />,
    text: 'News & Insights'
  }
];
