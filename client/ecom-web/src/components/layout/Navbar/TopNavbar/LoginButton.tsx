import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { UserCircle, UserIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../../../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../../../lib/utils';
import React from 'react';

const LoginButton = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex gap-3">
              <UserIcon className="w-5 h-5 min-w-5 min-h-5 text-black/40"></UserIcon>
              <p>Login</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Card className="min-w-72">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-parkinsansCF">
                      New Customer?
                    </span>
                    <Button variant={'link'} className="font-parkinsansCF">
                      Sign Up
                    </Button>
                  </div>
                </CardTitle>

                <CardDescription>
                  If you are new user create aaccount
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Sign In</Button>
              </CardContent>
            </Card>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex gap-3">
              <UserCircle className="w-5 h-5 min-w-5 min-h-5 text-black/40" />
              <p>Profile</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/profile"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium items-center justify-center flex flex-col">
                      <Image
                        src={'/images/blank-profile-picture.png'}
                        alt="profile"
                        width={100}
                        height={100}
                      />

                      <div className="mb-2 mt-4 text-lg font-medium">
                        Kannan S
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        101, My Address Line1, My Address Line2, My City, My
                        State, My Country, 123456
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/orders" title="My Orders">
                Here you can see your orders and their status and you can also
                cancel them if you want to.
              </ListItem>
              <ListItem href="/settings" title="Settings">
                Here you can set your profile information like delivery address,
                password, aontact number an so on.
              </ListItem>
              <ListItem href="/faq" title="Query">
                In this section you can ask your queries to us.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
export default LoginButton;
