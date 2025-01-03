'use client';
import CartItemSection from '@/components/viewcart/CartItemSection';
import { cn } from '@/lib/utils';
import { TbBasketExclamation } from 'react-icons/tb';
import { parkinsansCF } from '@/styles/fonts';
import { CartDataItem } from '../../lib/data';
import ProductCard from '../../components/common/ProductCard';
import React from 'react';
import { Button } from '../../components/ui/button';
import InputGroup from '../../components/ui/input-group';
import { Bookmark, MoveRight } from 'lucide-react';
import Link from 'next/link';

const cartItem = CartDataItem;
const totalPrice = CartDataItem.reduce(
  (acc, product) => acc + product.price * 1,
  0
);
const adjustedTotalPrice = 0;
const ViewCartPage = () => {
  return (
    <main className="container bg-primary-foreground my-3 m-auto p-4 rounded-md">
      <section className="flex flex-col gap-2">
        {CartDataItem && cartItem.length > 0 ? (
          <>
            <h1
              className={cn([
                parkinsansCF.className,
                'text-xl md:text-[30px] md:leading-[30px] mb-3 md:mb-3.5 capitalize',
              ])}
            >
              Your Cart Items
            </h1>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                {CartDataItem?.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && (
                      <hr className="border-t-black/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                <h6 className="text-xl md:text-2xl font-bold text-black">
                  Order Summary
                </h6>
                <div className="flex flex-col space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">Subtotal</span>
                    <span className="md:text-xl font-bold">${totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">
                      Discount (-
                      {Math.round(
                        ((totalPrice - adjustedTotalPrice) / totalPrice) * 100
                      )}
                      %)
                    </span>
                    <span className="md:text-xl font-bold text-red-600">
                      -${Math.round(totalPrice - adjustedTotalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">
                      Delivery Fee
                    </span>
                    <span className="md:text-xl font-bold">Free</span>
                  </div>
                  <hr className="border-t-black/10" />
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black">Total</span>
                    <span className="text-xl md:text-2xl font-bold">
                      ${Math.round(adjustedTotalPrice)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <InputGroup className="bg-[#F0F0F0]">
                    <InputGroup.Text>
                      <Bookmark className="text-black/40 text-2xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="code"
                      placeholder="Add promo code"
                      className="bg-transparent placeholder:text-black/40"
                    />
                  </InputGroup>
                  <Button
                    type="button"
                    className="bg-black rounded-full w-full max-w-[119px] h-[48px]"
                  >
                    Apply
                  </Button>
                </div>
                <Button
                  type="button"
                  className="text-sm md:text-base font-medium bg-black rounded-full w-full py-4 h-[54px] md:h-[60px] group"
                >
                  Go to Checkout{' '}
                  <MoveRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-gray-300 mt-32">
            <TbBasketExclamation strokeWidth={1} className="text-6xl" />
            <span className="block mb-4">Your shopping cart is empty.</span>
            <Button className="rounded-full w-24" asChild>
              <Link href="/shop">Shop</Link>
            </Button>
          </div>
        )}
        <CartItemSection />
      </section>
      <section>Saved For Later</section>
    </main>
  );
};

export default ViewCartPage;
