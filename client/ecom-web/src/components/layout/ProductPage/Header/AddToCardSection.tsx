import React, { useState } from 'react';
import BuynowButton from './BuynowButton';
import AddToCartBtn from './AddToCartBtn';
import ItemCounter from '../../../common/ItemCounter';
import { Product } from '../../../../types/product.types';
type AddToCardSectionProps = {
  data: Product;
};
const AddToCardSection = ({ data }: AddToCardSectionProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
      <ItemCounter onAdd={setQuantity} onRemove={setQuantity} />
      <AddToCartBtn data={data} quantity={quantity} />
      <BuynowButton />
    </div>
  );
};
export default AddToCardSection;
