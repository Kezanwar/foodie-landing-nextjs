export type MenuOption = {
  link: string;
  text: string;
  icon: string;
};

export const NAV_MENU_OPTIONS: Array<MenuOption> = [
  {
    link: '/',
    icon: 'ic_bag_smile',
    text: 'Customers'
  },
  {
    link: '/partners',
    icon: 'ic_store',
    text: 'Partners'
  },
  {
    link: '/news',
    icon: 'ic_read',
    text: 'News & Insights'
  }
];
