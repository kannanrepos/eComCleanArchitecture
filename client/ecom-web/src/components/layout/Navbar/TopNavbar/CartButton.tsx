import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const CartButton = () => {
  return (
    <Link
      href="/cart"
      className="relative p-1 w-5 h-5 min-w-5 min-h-5 text-black/40 cursor-pointer hover:text-primary"
    >
      <ShoppingCart />
      <Badge
        variant={'secondary'}
        className="absolute -top-4 -right-5 rounded-full hover:text-primary-foreground hover:bg-primary"
      >
        10
      </Badge>
    </Link>
  );
};

export default CartButton;
