'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FilterIcon } from 'lucide-react';

import BreadcrumbSec from '@/components/common/BreadcrumbSec';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProductCard from '@/components/common/ProductCard';
import Filters from '@/components/layout/ProductPage/filters';
import MobileFilters from '@/components/layout/ProductPage/filters/MobileFilters';

import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from '@/lib/utils';
import { SearchPageBreadCrumbData } from '@/lib/data';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const search = searchParams.get('q');
    if (search) setSearchText(search);
  }, [searchParams, searchText]);

  return (
    <main>
      <div className="md:container mx-auto px-4 my-3 xl:px-0">
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] bg-primary-foreground rounded-sm px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FilterIcon className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full bg-primary-foreground rounded-sm px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <BreadcrumbSec data={SearchPageBreadCrumbData} />
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">
                  results for &quot;{searchText}&quot;
                </h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing 1-10 of 100
                </span>
                <div className="flex items-center">
                  Sort by:
                  <Select defaultValue="most-popular">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {[
                ...relatedProductData.slice(1, 4),
                ...newArrivalsData.slice(1, 4),
                ...topSellingData.slice(1, 4),
              ].map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
