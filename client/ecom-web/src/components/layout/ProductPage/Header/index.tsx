'use client';
import React from 'react';
import { Product } from '../../../../types/product.types';
import PhotoSection from './PhotoSection';
import { cn } from '../../../../lib/utils';
import { parkinsansCF } from '../../../../styles/fonts';
import Ratings from '../../../ui/ratings';
import ColorSelection from './ColorSelection';
import SizeSelection from './SizeSelection';
import AddToCardSection from './AddToCardSection';
import BreadcrumbSec from '../../../common/BreadcrumbSec';
type HeaderProps = {
  data: Product;
};
const breadcrumbData: BredcumProp[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Product',
    url: '/search',
  },
  {
    id: 3,
    title: 'Product Detail',
  },
];
const Header = ({ data }: HeaderProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <PhotoSection data={data} />
          <hr className="hidden md:block h-[1px] border-t-black/5 my-5" />
          <AddToCardSection data={data} />
        </div>
        <div className="flex flex-col gap-2 col-span-3">
          <BreadcrumbSec data={breadcrumbData} />
          <h1
            className={cn([
              parkinsansCF.className,
              'text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize',
            ])}
          >
            {data.title}
          </h1>
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
            {data.discount.percentage > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${Math.round(
                  data.price - (data.price * data.discount.percentage) / 100
                )}`}
              </span>
            ) : data.discount.amount > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${data.price - data.discount.amount}`}
              </span>
            ) : (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.amount > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                {`-${data.discount.percentage}%`}
              </span>
            ) : (
              data.discount.amount > 0 && (
                <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                  {`-$${data.discount.amount}`}
                </span>
              )
            )}
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
