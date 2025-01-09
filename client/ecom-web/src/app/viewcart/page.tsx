'use client';

import { CartDataItem, deliveryAddress } from '@/lib/data';

import CartItemSection from '@/components/viewcart/CartItemSection';
import PriceDetails from '@/components/viewcart/CartItemSection/PriceDetails';
import EmptyCart from '@/components/viewcart/CartItemSection/EmptyCart';
import HeaderTag from '@/components/common/HeaderTag';
import DeliveryAddress from '@/components/viewcart/DeliveryAddress';
import SelectAddress from '@/components/viewcart/SelectAddress';

const cartItem = CartDataItem;

const ViewCartPage = () => {
  return (
    <main className="container my-3 m-auto p-4 rounded-md">
      <section className="flex flex-col gap-2">
        {CartDataItem && cartItem.length > 0 ? (
          <>
            <div className="bg-primary-foreground p-4 flex items-center justify-between">
              <div>
                <HeaderTag title="Your Cart Items" />
                <DeliveryAddress text="Deliver to:" address={deliveryAddress} />
              </div>
              <SelectAddress />
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              <CartItemSection />
              <PriceDetails />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </main>
  );
};

export default ViewCartPage;
