import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {AuthPageFlow} from "@/features/auth/types";
import {useState} from "react";
import {useAuthActions} from "@convex-dev/auth/react";


interface SignInCardProps {
  setState: (state: AuthPageFlow) => void;
}

export const SignInCard = ({setState}: SignInCardProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuthActions();

  const handleProviderSignIn = (value: "github" | "google") => {
    signIn(value)
  }

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
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={false}>Login</Button>
        </form>
        <Separator/>
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            size={"lg"}
            variant={"outline"}
            disabled={false}
            onClick={() => handleProviderSignIn("google")}
          >
            <FcGoogle className="size-5 absolute top-3 start-2.5"/>
            Sign in with Google
          </Button>
          <Button
            className="w-full relative"
            size={"lg"}
            variant={"outline"}
            disabled={false}
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