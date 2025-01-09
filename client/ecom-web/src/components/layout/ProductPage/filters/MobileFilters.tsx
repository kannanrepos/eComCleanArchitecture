import React from 'react';
import { FiSliders } from 'react-icons/fi';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import Filters from '.';

const MobileFilters = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <button
            type="button"
            className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
          >
            <FiSliders className="text-base mx-auto" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90%]">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription className="hidden">filters</DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[90%] overflow-y-auto w-full px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <Filters />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilters;
