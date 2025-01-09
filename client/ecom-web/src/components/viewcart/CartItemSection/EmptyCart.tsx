import Link from 'next/link';
import { TbBasketExclamation } from 'react-icons/tb';

import { Button } from '@/components/ui/button';

const EmptyCart = () => {
  return (
    <div className="flex items-center flex-col text-gray-300 mt-32">
      <TbBasketExclamation strokeWidth={1} className="text-6xl" />
      <span className="block mb-4">Your shopping cart is empty.</span>
      <span className="block mb-4">
        Explore our wide selection and find something you like.
      </span>
      <Button className="rounded-full w-24" asChild>
        <Link href="/search">Shop</Link>
      </Button>
    </div>
  );
}

export default EmptyCart