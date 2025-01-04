'use client';
import { productList, reviewsData } from '@/lib/utils';

import Header from '@/components/homepage/Header';
import ProductListSection from '@/components/common/ProductListSection';
import Categories from '@/components/homepage/Category';
import Reviews from '@/components/homepage/Reviews';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSection
          title="NEW ARRIVALS"
          data={productList}
          viewAllLink="/shop#new-arrivals"
        />
        <Separator />
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
