import { notFound } from 'next/navigation';
import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from '@/lib/utils';
import { Product } from '@/types/product.types';
import Header from '@/components/layout/ProductPage/Header';
import ProductTabs from '@/components/layout/ProductPage/ProductTabs';
import ProductListSec from '@/components/layout/ProductPage/ProductListSec';
const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

const ProductDetailPage = ({ params }: { params: { slug: string[] } }) => {
  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  );

  if (!productData?.title) {
    notFound();
  }
  return (
    <main>
      <div className="lg:container mx-auto my-3 p-6 xl:p-4 bg-primary-foreground">
        {/* <BreadcrumbSec data={breadcrumbData} /> */}
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <ProductTabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
};

export default ProductDetailPage;
