import { Fragment } from 'react';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BredcumProp } from '@/types/breadcrumb.type';
type BreadcrumbSecProp = {
  data: BredcumProp[];
};
const BreadcrumbSec = ({ data }: BreadcrumbSecProp) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((bredcam, index) => (
          <Fragment key={bredcam.id}>
            <BreadcrumbItem>
              {bredcam.url ? (
                <BreadcrumbLink asChild>
                  <Link href={bredcam.url}>{bredcam.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{bredcam.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            <>{index == data.length - 1 ? null : <BreadcrumbSeparator />}</>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbSec;
