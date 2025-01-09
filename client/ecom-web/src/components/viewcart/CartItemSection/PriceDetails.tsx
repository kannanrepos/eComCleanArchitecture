import { MdOutlineDiscount, MdOutlineNavigateNext } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import InputGroup from '@/components/ui/input-group';
import HeaderTag from '@/components/common/HeaderTag';

import { CartDataItem } from '@/lib/data';
const totalPrice = CartDataItem.reduce(
  (acc, product) => acc + product.price * 1,
  0
);
const adjustedTotalPrice = 0;
const PriceDetails = () => {
  return (
    <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6  bg-primary-foreground sticky top-14">
      <HeaderTag title="Price Details" />
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <span className="md:text-md text-black/60">Subtotal</span>
          <span className="md:text-md font-bold">${totalPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="md:text-md text-black/60">
            Discount (-
            {Math.round(((totalPrice - adjustedTotalPrice) / totalPrice) * 100)}
            %)
          </span>
          <span className="md:text-md font-bold text-destructive">
            -${Math.round(totalPrice - adjustedTotalPrice)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="md:text-md text-black/60">Delivery Fee</span>
          <span className="md:text-md font-bold">Free</span>
        </div>
        <hr className="border-t-black/10" />
        <div className="flex items-center justify-between">
          <span className="md:text-md font-bold text-black">Total</span>
          <span className="text-md md:text-xl font-bold">
            ${Math.round(adjustedTotalPrice)}
          </span>
        </div>
      </div>
      <div className="flex space-x-3">
        <InputGroup className="bg-primary/10">
          <InputGroup.Text>
            <MdOutlineDiscount className="text-black/40 text-2xl" />
          </InputGroup.Text>
          <InputGroup.Input
            type="text"
            name="code"
            placeholder="Add promo code"
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <Button type="button" className="h-12">
          Apply
        </Button>
      </div>
      <Button
        type="button"
        className="text-sm md:text-base font-medium  w-full py-4 h-[54px] md:h-[60px] group"
      >
        Place Order
        <MdOutlineNavigateNext className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
      </Button>
    </div>
  );
};

export default PriceDetails;
