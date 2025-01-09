import { Product } from '@/types/product.types';

type PriceCardProp = {
  data: Product;
};

const PriceCard = ({ data }: PriceCardProp) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY ?? '₹';
  return (
    <>
      {data.discount.percentage > 0 ? (
        <span className="font-bold text-black text-xl xl:text-2xl">
          {`${currency}${Math.round(
            data.price - (data.price * data.discount.percentage) / 100
          )}`}
        </span>
      ) : data.discount.amount > 0 ? (
        <span className="font-bold text-black text-xl xl:text-2xl">
          {`${currency}${data.price - data.discount.amount}`}
        </span>
      ) : (
        <span className="font-bold text-black text-xl xl:text-2xl">
          {currency}
          {data.price}
        </span>
      )}
      {data.discount.percentage > 0 && (
        <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
          {currency}
          {data.price}
        </span>
      )}
      {data.discount.amount > 0 && (
        <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
          {currency}
          {data.price}
        </span>
      )}
      {data.discount.percentage > 0 ? (
        <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-destructive">
          {`-${data.discount.percentage}%`}
        </span>
      ) : (
        data.discount.amount > 0 && (
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-destructive">
            {`-${currency}${data.discount.amount}`}
          </span>
        )
      )}
    </>
  );
};

export default PriceCard;
