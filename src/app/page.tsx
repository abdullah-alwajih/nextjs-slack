"use client";
import {useAuthActions} from "@convex-dev/auth/react";
import {Button} from "@/components/ui/button";

export default function Home() {
  const {signOut} = useAuthActions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        logged in
      <br/>
      <br/>
      <Button
        onClick={() => signOut()}
      >
        Sign out
      </Button>
      </div>
    </main>
  );
}
