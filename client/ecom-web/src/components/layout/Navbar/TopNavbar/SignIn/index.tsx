import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import SignInForm from './SignInForm';

const SignInSection = () => {
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Signup</AlertDialogTitle>
        <AlertDialogDescription>
          <SignInForm />
        </AlertDialogDescription>
      </AlertDialogHeader>
    </>
  );
};

export default SignInSection;
