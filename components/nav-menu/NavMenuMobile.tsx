import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { NAV_MENU_OPTIONS } from './util';
import { NavItemMob } from './components/NavItemMob';
import Link from 'next/link';
import { SvgColor } from 'components/svg-color';

type Props = {
  onNavPress: () => void;
};

const NavMenuMobile: FC<Props> = ({ onNavPress }) => {
  const { pathname } = useRouter();

  return (
    <div className="  flex flex-col  gap-3">
      {NAV_MENU_OPTIONS.map((menu_item, i) => {
        return (
          <React.Fragment key={menu_item.text}>
            <Link href={menu_item.link}>
              <NavItemMob
                onClick={onNavPress}
                active={pathname === menu_item.link}
              >
                <SvgColor name={menu_item.icon} /> {menu_item.text}
              </NavItemMob>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavMenuMobile;
