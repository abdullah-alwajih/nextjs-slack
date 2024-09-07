import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {AuthPageFlow} from "@/features/auth/types";
import {useState} from "react";
import {useAuthActions} from "@convex-dev/auth/react";
import { TriangleAlert } from 'lucide-react';


interface SignInCardProps {
  setState: (state: AuthPageFlow) => void;
}

export const SignInCard = ({setState}: SignInCardProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const {signIn} = useAuthActions();

   const handlePasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    signIn('password', { email, password, flow: 'signIn' })
      .catch(() => {
        setError('Invalid email or password');
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignIn = (value: 'github' | 'google') => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          Sign in to continue
        </CardTitle>
        <CardDescription>
          Use your email or auther services to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form
          onSubmit={handlePasswordSignIn}
          className="space-y-2.5"
        >
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={pending}>Login</Button>
        </form>
        <Separator/>
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            size={"lg"}
            variant={"outline"}
            disabled={pending}
            onClick={() => handleProviderSignIn("google")}
          >
            <FcGoogle className="size-5 absolute top-3 start-2.5"/>
            Sign in with Google
          </Button>
          <Button
            className="w-full relative"
            size={"lg"}
            variant={"outline"}
            disabled={pending}
            onClick={() => handleProviderSignIn("github")}
          >

            <FaGithub className="size-5 absolute top-3  start-2.5"/>
            Sign in with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account? <span onClick={() => setState('signUp')}
                                            className="text-sky-700 hover:underline cursor-pointer">Sign Up</span>
        </p>
      </CardContent>
    </Card>
  );
}