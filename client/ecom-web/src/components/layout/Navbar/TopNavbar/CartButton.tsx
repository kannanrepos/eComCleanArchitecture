import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const CartButton = () => {
  return (
    <Link
      href="/viewcart"
      className="relative p-1 w-5 h-5 min-w-5 min-h-5 text-primary-foreground cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <ShoppingCart />
      <Badge
        variant={'secondary'}
        className="absolute -top-4 -right-4 lg:-right-5 rounded-full text-primary-foreground "
      >
        10
      </Badge>
    </Link>
  );
};

export default CartButton;
