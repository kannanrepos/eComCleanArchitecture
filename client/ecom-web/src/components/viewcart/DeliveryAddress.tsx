import { Address } from '@/types/address.type';
import { Badge } from '@/components/ui/badge';

type DeliveryAddressProps = {
  text?: string;
  address: Address;
};

const DeliveryAddress = ({ text, address }: DeliveryAddressProps) => {
  return (
    <div className="text-[12px] flex flex-col gap-1 text-gray-400">
      <div className="flex gap-3">
        {text}
        <span className="font-bold text-primary">
          {address.name}, {address.zipCode}
        </span>
        <Badge variant={'outline'}>{address.type}</Badge>
      </div>
      <div className="max-w-[350px] hidden md:block truncate text-ellipsis overflow-hidden">
        {address.address}, {address.city}, {address.state}, {address.country}
      </div>
    </div>
  );
};

export default DeliveryAddress;
