import { Button } from '@/components/ui/button';

const BuynowButton = () => {
  return (
    <Button className="bg-accent w-full ml-3 sm:ml-5 rounded-sm h-11 md:h-[52px] text-sm sm:text-base text-accent-foreground transition-all hover:text-primary-foreground hover:bg-black/80">
      Buy Now
    </Button>
  );
};

export default BuynowButton;
