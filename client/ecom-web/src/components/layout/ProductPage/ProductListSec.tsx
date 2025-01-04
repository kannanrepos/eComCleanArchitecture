import { Product } from '@/types/product.types';

type ProductListSecProps = {
  title: string;
  data: Product[];
};
const ProductListSec = ({ title, data }: ProductListSecProps) => {
  return <div>ProductListSec</div>;
};

export default ProductListSec;
