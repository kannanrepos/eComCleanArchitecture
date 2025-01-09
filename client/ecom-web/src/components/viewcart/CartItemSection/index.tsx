import React from 'react';
import { Button } from '@/components/ui/button';
import BreadcrumbSec from '@/components/common/BreadcrumbSec';
import { Separator } from '@/components/ui/separator';

import { CartDataItem, CartItemBreadCrumbData } from '@/lib/data';
import CartItem from './CartItem';

const CartItemSection = () => {
  return (
    <div className="bg-primary-foreground flex-col w-full">
      <div className="p-2 mx-5">
        <BreadcrumbSec data={CartItemBreadCrumbData} />
      </div>
      <Separator />
      <div className="w-full p-3.5 md:px-6  space-y-4 md:space-y-6 ">
        {CartDataItem?.map((product, idx, arr) => (
          <React.Fragment key={idx}>
            <CartItem data={product} />
            {arr.length - 1 !== idx && <hr className="border-t-black/10" />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-end border p-4 sticky bottom-0 w-full bg-primary-foreground shadow-md">
        <Button className="capitalize">Place Order</Button>
      </div>
    </div>
  );
};

export default CartItemSection;
