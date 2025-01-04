'use client';
import { Product } from '@/types/product.types';
import { ProductDetailBreadcrumbData } from '@/lib/data';

import Ratings from '@/components/ui/ratings';
import BreadcrumbSec from '@/components/common/BreadcrumbSec';
import HeaderTag from '@/components/common/HeaderTag';
import ScreenSizeFinder from '@/components/common/ScreenSizeFinder';
import PriceCard from '@/components/common/PriceCard';

import PhotoSection from './PhotoSection';
import ColorSelection from './ColorSelection';
import SizeSelection from './SizeSelection';
import AddToCardSection from './AddToCardSection';

type HeaderProps = {
  data: Product;
};
const Header = ({ data }: HeaderProps) => {
  return (
    <>
      <ScreenSizeFinder />
      <div className="block xl:hidden mb-4">
        <BreadcrumbSec data={ProductDetailBreadcrumbData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 ">
        <div className="col-span-1 lg:col-span-3">
          <PhotoSection data={data} />
          <hr className="hidden md:block h-[1px] border-t-black/5 my-5" />
          <AddToCardSection data={data} />
        </div>
        <div className="flex flex-col gap-2 col-span-3">
          <div className="hidden xl:block">
            <BreadcrumbSec data={ProductDetailBreadcrumbData} />
          </div>
          <div className="mt-4 xl:mt-0">
            <HeaderTag title={data.title} />
          </div>
          <div className="flex items-center mb-3 sm:mb-3.5">
            <Ratings
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
              readonly
            />
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {data.rating.toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          </div>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            <PriceCard data={data} />
          </div>
          <p className="text-sm sm:text-base text-black/60 mb-5">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="h-[1px] border-t-black/10 mb-5" />
          <ColorSelection />
          <hr className="h-[1px] border-t-black/10 my-5" />
          <SizeSelection />
        </div>
      </div>
    </>
  );
};

export default Header;
