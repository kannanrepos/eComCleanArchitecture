import Link from 'next/link';
import { SearchIcon } from 'lucide-react';
import { NavMenuItemsData } from '@/lib/data';

import Menubar from '../Menubar';

import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import CartButton from './CartButton';
import LogoLink from './LogoLink';
import MobileMenubar from './MobileMenubar';

const TopNavbar = () => {
  return (
    <>
      <nav className="sticky top-0 bg-primary z-40 backdrop-blur-3xl">
        <div className="flex gap-3 relative max-w-frame mx-auto items-center justify-between md:justify-start py-2 px-4 xl:px-0">
          <div className="flex items-center gap-3 mx-4">
            <div className="block md:hidden">
              <MobileMenubar data={NavMenuItemsData} />
            </div>
            <div className="mx-6">
              <LogoLink
                imgHight={40}
                imgWidth={40}
                TextClassName="2xl font-bold hidden lg:block"
                showSubText={false}
                imgClassName="hidden lg:block"
              />
            </div>
          </div>
          <SearchBar />
          <div className="flex items-center">
            <Link href="/search" className="block md:hidden mr-[14px] p-1">
              <SearchIcon className="w-5 h-5 min-w-5 min-h-5 text-primary-foreground"></SearchIcon>
            </Link>
          </div>
          <LoginButton />
          <CartButton />
        </div>
      </nav>
      <Menubar data={NavMenuItemsData} />
    </>
  );
};

export default TopNavbar;
