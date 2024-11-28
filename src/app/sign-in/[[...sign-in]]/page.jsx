import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-[100vh]  items-center justify-center p-3"> 
        <SignIn /> 
    </div>
  );
}
