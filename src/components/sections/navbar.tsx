import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NavigationBar() {
  const { data: sessionData } = useSession();

  return (
    <nav className="mb-5 flex flex-row justify-between bg-primary/10 p-3">
      <div className="flex flex-row gap-3">
        <Link href="/">
          <Button variant={"ghost"}>Shop</Button>
        </Link>
        <Link href="/offers">
          <Button variant={"ghost"}>Offers</Button>
        </Link>
        <Link href="/about">
          <Button variant={"ghost"}>About</Button>
        </Link>
      </div>
      <Button
        onClick={
          sessionData ? () => void signOut() : () => void signIn("google")
        }
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>{" "}
    </nav>
  );
}
