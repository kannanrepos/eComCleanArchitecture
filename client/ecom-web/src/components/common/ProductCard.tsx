import Link from 'next/link';
import { Product } from '../../types/product.types';
import Image from 'next/image';
import { base64Image } from '../../lib/utils';
import Ratings from '../ui/ratings';
import { Badge } from '../ui/badge';

type ProductCardProps = {
  data: Product;
};
const currencySymbol = '₹';
const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${data.id}/${data.title.split(' ').join('-')}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-primary/5 rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={base64Image}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>
      <strong className="text-gray-500 xl:text-xl">{data.title}</strong>
      <strong className="text-gray-300 xl:text-sm font-serif">
        {data.title}
      </strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Ratings
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-primary text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-primary/60">/5</span>
        </span>
      </div>
      <div className="flex items-center justify-between space-x-[5px] xl:space-x-2.5">
        {data.discount.percentage > 0 ? (
          <span className="font-bold text-black text-xl xl:text-2xl">
            {`${currencySymbol}${Math.round(
              data.price - (data.price * data.discount.percentage) / 100
            )}`}
          </span>
        ) : data.discount.amount > 0 ? (
          <span className="font-bold text-black text-xl xl:text-2xl">
            {`${currencySymbol}${data.price - data.discount.amount}`}
          </span>
        ) : (
          <span className="font-bold text-black text-xl xl:text-2xl">
            {currencySymbol}
            {data.price}
          </span>
        )}
        {data.discount.percentage > 0 && (
          <span className="font-bold text-destructive/40 line-through text-xl xl:text-2xl">
            {currencySymbol}
            {data.price}
          </span>
        )}
        {data.discount.amount > 0 && (
          <span className="font-bold text-destructive/40 line-through text-xl xl:text-2xl">
            {currencySymbol}
            {data.price}
          </span>
        )}

        {data.discount.percentage > 0 ? (
          <Badge className="bg-destructive">{`-${data.discount.percentage}%`}</Badge>
        ) : (
          data.discount.amount > 0 && (
            <Badge className="bg-destructive">{`-${data.discount.amount}`}</Badge>
          )
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
