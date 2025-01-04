import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import FaqContent from './FaqContent';
import ProductDetailsContent from './ProductDetailsContent';
import ReviewsContent from './ReviewsContent';
type TabBtn = {
  id: number;
  label: string;
};
const tabBtnData: TabBtn[] = [
  {
    id: 1,
    label: 'Details',
  },
  {
    id: 2,
    label: 'Reviews',
  },
  {
    id: 3,
    label: 'FAQs',
  },
];
const ProductTabs = () => {
  return (
    <div>
      <div className="flex items-center mb-6 sm:mb-8 overflow-x-auto">
        <Tabs
          defaultValue={tabBtnData[0].label}
          className="w-full bg-primary-foreground"
        >
          <TabsList className="grid w-full grid-cols-3 bg-primary-foreground">
            {tabBtnData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.label}
                className="border-b-2 hover:bg-primary hover:text-primary-foreground hover:border-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-primary-foreground p-2"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabBtnData.map((tab) => (
            <TabsContent key={tab.id} value={tab.label}>
              {(() => {
                switch (tab.id) {
                  case 1:
                    return <ProductDetailsContent />;
                  case 2:
                    return <ReviewsContent />;
                  case 3:
                    return <FaqContent />;
                  default:
                    return null;
                }
              })()}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
