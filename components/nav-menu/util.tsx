import { ReactElement } from 'react';
import { SvgColor } from 'components/svg-color';

export type MenuOption = {
  link: string;
  text: string;
  icon: string;
};

export const NAV_MENU_OPTIONS: Array<MenuOption> = [
  {
    link: '/',
    icon: 'ic_user',
    text: 'Customer'
  },
  {
    link: '/restaurant',
    icon: 'ic_store',
    text: 'Restaurant'
  },
  {
    link: '/news',
    icon: 'ic_blog',
    text: 'News & Insights'
  },
  
];
