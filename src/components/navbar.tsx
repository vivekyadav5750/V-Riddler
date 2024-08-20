import { BotMessageSquare, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="from-background/10 via-background/50 to-background/80  top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b px-4 backdrop-blur-xl fixed">
      <div className=" flex space-x-2">
        <div>
        <Link href={"/"}>
          <BotMessageSquare />
          </Link>
        </div>
        <div className="flex items-center ">
        <Link href={"/"}>
          <span className="ml-2 text-sm font-medium hover:underline ">
            V-Riddler
          </span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <div>
          {/* <Link href="/login" passHref>
            <Button>
              <LogIn className="mr-2" size={14} /> Log In
            </Button>
          </Link> */}
          {/* <Button variant="outline" > Log In </Button> */}
          <Button asChild>
            <Link href={"/login"}>
              <LogIn className="mr-2" size={14} />
              Login
            </Link>
          </Button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
