'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ReviewCard from '@/components/common/ReviewCard';
import { reviewsData } from '@/lib/utils';

const ReviewsContent = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6 py-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">(451)</span>
        </div>
        <div className="flex items-center space-x-2.5">
          <Select defaultValue="latest">
            <SelectTrigger className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-secondary bg-accent/10 border-accent h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="most-relevant">Most Relevant</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4  font-medium text-xs sm:text-base h-10"
          >
            Write a Review
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} data={review} isAction isDate />
        ))}
      </div>
      <div className="w-full px-4 sm:px-0 text-center">
        <Link
          href="#"
          className="inline-block px-11 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground text-primary transition-all font-medium text-sm sm:text-base border-primary/60"
        >
          Load More Reviews
        </Link>
      </div>
    </section>
  );
};

export default ReviewsContent;
