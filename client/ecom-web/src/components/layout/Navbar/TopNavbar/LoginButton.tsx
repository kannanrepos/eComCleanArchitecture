import React from 'react';
import { UserIcon } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { cn } from '@/lib/utils';

import SignInSection from './SignIn';
import SignUpSection from './SignUp';

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
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant={'link'} className="font-parkinsansCF">
                          Sign Up
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-transparent">
                        <SignUpSection />
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardTitle>

                <CardDescription>
                  If you are new user create aaccount
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full">Sign In</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-transparent border-none">
                    <SignInSection />
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
