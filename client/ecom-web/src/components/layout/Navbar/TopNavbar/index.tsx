import { NavMenu } from '../navbar.types';
import MobileMenubar from './MobileMenubar';
import LogoLink from './LogoLink';

import React from 'react';
import { SearchIcon } from 'lucide-react';
import SearchBar from './SearchBar';
import Link from 'next/link';
import LoginButton from './LoginButton';
import CartButton from './CartButton';
const data: NavMenu = [
  {
    id: 1,
    label: 'Shop',
    type: 'MenuList',
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: '/shop#men-clothes',
        description: 'In attractive and spectacular colors and designs',
      },
      {
        id: 12,
        label: "Women's clothes",
        url: '/shop#women-clothes',
        description: 'Ladies, your style and tastes are important to us',
      },
      {
        id: 13,
        label: 'Kids clothes',
        url: '/shop#kids-clothes',
        description: 'For all ages, with happy and beautiful colors',
      },
      {
        id: 14,
        label: 'Bags and Shoes',
        url: '/shop#bag-shoes',
        description: 'Suitable for men, women and all tastes and styles',
      },
    ],
  },
  {
    id: 2,
    type: 'MenuItem',
    label: 'On Sale',
    url: '/shop#on-sale',
    children: [],
  },
  {
    id: 3,
    type: 'MenuItem',
    label: 'New Arrivals',
    url: '/shop#new-arrivals',
    children: [],
  },
  {
    id: 4,
    type: 'MenuItem',
    label: 'Brands',
    url: '/shop#brands',
    children: [],
  },
];
const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-primary/0 z-40 backdrop-blur-3xl">
      <div className="flex gap-3 relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center gap-3 mx-4">
          <div className="block md:hidden">
            <MobileMenubar data={data} />
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
            <SearchIcon className="w-5 h-5 min-w-5 min-h-5 text-black/40"></SearchIcon>
          </Link>
        </div>
        <LoginButton />
        <CartButton />
      </div>
    </nav>
  );
};

export default TopNavbar;
