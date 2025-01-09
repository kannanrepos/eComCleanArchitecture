import Image from 'next/image';
import Link from 'next/link';
import PriceCard from '@/components/common/PriceCard';
import ItemCounter from '@/components/common/ItemCounter';
import { Button } from '@/components/ui/button';

import { Product } from '@/types/product.types';

type CartDataItemProp = {
  data: Product;
};
const CartItem = ({ data }: CartDataItemProp) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
        <div className="col-span-1">
          <Link
            href={`/shop/product/${data.id}/${data.title.split(' ').join('-')}`}
            className="bg-primary/10 rounded-lg w-full"
          >
            <Image
              src={data.srcUrl}
              width={100}
              height={100}
              className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
              alt={data.title}
              priority
            />
          </Link>
        </div>
        <div className="col-span-2 flex flex-col space-y-2">
          <div className="text-md font-bold">{data.title}</div>
          <div className="text-[10px] font-thin">Size: 6, color: red</div>
          <div className="text-sm">
            {data.shortDescription}
            This is a short description of the product. It provides a brief
            overview of the products features and benefits.
          </div>
          <div className="flex items-center flex-wrap justify-between">
            <div className="flex items-center space-x-[5px] xl:space-x-2.5">
              <PriceCard data={data} />
            </div>
          </div>
          <div className="flex items-center justify-start mt-5">
            <ItemCounter />

            <Button variant={'link'} className="capitalize">
              Remove
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CartItem;
