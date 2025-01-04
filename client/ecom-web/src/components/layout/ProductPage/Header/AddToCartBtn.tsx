import { Button } from '@/components/ui/button';
import { Product } from '@/types/product.types';
type AddToCartBtnProps = {
  data: Product;
  quantity: number;
};
const AddToCartBtn = ({ data, quantity }: AddToCartBtnProps) => {
  return (
    <Button className="w-full ml-3 sm:ml-5 rounded-sm h-11 md:h-[52px] text-sm sm:text-base text-primary-foreground hover:bg-black/80 transition-all">
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
