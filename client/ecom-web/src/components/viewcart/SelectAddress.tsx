import { useEffect, useState } from 'react';
import { GrClose, GrMapLocation } from 'react-icons/gr';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { Address } from '@/types/address.type';
import { AddressList } from '@/lib/data';

import DeliveryAddress from './DeliveryAddress';

const SelectAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState<Address>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const defaultAddress = AddressList.some((x) => x.isDefault)
      ? AddressList.find((x) => x.isDefault)
      : AddressList[0];
    setSelectedAddress(defaultAddress as Address);
  }, []);
  const handleValueChange = (value: string) => {
    const address = AddressList.find((x) => x.id === value);
    setSelectedAddress(address as Address);
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant={'outline'}
          className="bg-primary-foreground text-primary border border-primary"
        >
          Change
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="my-2 flex justify-between items-center">
            Select Delivery Address
            <Button
              variant={'ghost'}
              size={'icon'}
              className="-mt-12 -mr-5 relative"
              onClick={() => setOpen(false)}
            >
              <GrClose size={16} />
            </Button>
          </AlertDialogTitle>
          <AlertDialogDescription className="my-2">
            {AddressList && AddressList.length > 0 && (
              <ScrollArea className="h-72">
                <RadioGroup
                  defaultValue={selectedAddress?.id}
                  onValueChange={(value) => handleValueChange(value)}
                >
                  {AddressList.map((address) => (
                    <div key={address.id} className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={address.id.toString()}
                          id={address.id.toString()}
                        />
                        <Label htmlFor={address.id.toString()}>
                          <DeliveryAddress
                            address={{ ...address, id: address.id.toString() }}
                          />
                        </Label>
                        {address.isDefault && (
                          <Badge variant={'outline'}>Default</Badge>
                        )}
                      </div>
                      {address.id !==
                        AddressList[AddressList.length - 1].id && <Separator />}
                    </div>
                  ))}
                </RadioGroup>
              </ScrollArea>
            )}
          </AlertDialogDescription>
          <div className="flex flex-col gap-2">
            <h1>Use pincode to check delivery info</h1>
            <div className="flex gap-2">
              <Input placeholder="Enter pincode" />
              <Button variant={'outline'}>Check</Button>
            </div>
            <div className="flex gap-2 items-center">
              <GrMapLocation />
              <Button variant={'link'} className="text-primary">
                Use my current location
              </Button>
            </div>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SelectAddress;
