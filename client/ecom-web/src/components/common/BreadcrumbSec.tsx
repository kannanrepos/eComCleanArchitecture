import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from '../ui/breadcrumb';
type BreadcrumbSecProp = {
  data: BredcumProp[];
};
const BreadcrumbSec = ({ data }: BreadcrumbSecProp) => {
  return (
    <Breadcrumb className="my-2 sm:my-5">
      <BreadcrumbLink>
        {data.map((bredcam, index) => (
          <BreadcrumbItem key={index}>
            {bredcam.link ? (
              <BreadcrumbLink asChild>
                <Link href={bredcam.link}>{bredcam.label}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{bredcam.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbLink>
    </Breadcrumb>
  );
};

export default BreadcrumbSec;
