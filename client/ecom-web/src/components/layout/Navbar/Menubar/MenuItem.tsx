import React from 'react';
import Link from 'next/link';

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
type MenuItemProps = {
  label: string;
  url?: string;
};
const MenuItem = ({ label, url }: MenuItemProps) => {
  return (
    <NavigationMenuItem>
      <Link href={url ?? '/'} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn([
            navigationMenuTriggerStyle(),
            'font-normal bg-transparent',
          ])}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default MenuItem;
