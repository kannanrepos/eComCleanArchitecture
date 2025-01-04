'use client';
import { productList, reviewsData } from '@/lib/utils';

import Header from '@/components/homepage/Header';
import ProductListSection from '@/components/common/ProductListSection';
import Categories from '@/components/homepage/Category';
import Reviews from '@/components/homepage/Reviews';
import { Separator } from '@/components/ui/separator';
import { useGetProductsQuery } from '../lib/features/products/productApi';
import { useAppSelector } from '@/lib/hooks/redux';
import { RootState } from '../lib/store';
import { useAppDispatch } from '../lib/hooks/redux';
import { setProducts } from '../lib/features/products/productsSlice';
import { IProduct } from '../types/productInfo.type';

export default function Home() {
  const { data, error, isLoading, isError } = useGetProductsQuery({});
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const dispatch = useAppDispatch();
  dispatch(setProducts(data as IProduct[]));
  return (
    <>
      <div>
        URL: {process.env.NEXT_PUBLIC_API_URL}
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...</div>}
        {data && <div>Data: {JSON.stringify(products)}</div>}
        {error && <div>Error: {JSON.stringify(error)}</div>}
      </div>
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
