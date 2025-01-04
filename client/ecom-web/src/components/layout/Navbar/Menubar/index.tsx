import React from 'react';
import { NavMenu } from '../../../../types/navbar.types';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import MenuItem from './MenuItem';
import MenuList from './MenuList';
type MenubarProps = {
  data: NavMenu;
};
const Menubar = ({ data }: MenubarProps) => {
  return (
    <nav className="bg-primary-foreground p-1">
      <div className="flex gap-3 relative max-w-frame mx-auto items-center justify-between md:justify-start">
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7 bg-transparent">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === 'MenuItem' && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === 'MenuList' && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Menubar;
