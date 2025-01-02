import AnimatedNumberCard from '@/components/animated/AnimatedNumberCard';
import { Separator } from '@/components/ui/separator';

const CustomerHighlights = () => {
  return (
    <>
      <AnimatedNumberCard value={200} text="International Brands" />
      <Separator
        className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
        orientation="vertical"
      />
      <AnimatedNumberCard value={2000} text="High-Quality Products" />
      <Separator
        className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
        orientation="vertical"
      />
      <AnimatedNumberCard value={3000} text="Happy Customers" />
    </>
  );
};

export default CustomerHighlights;
