import Link from "next/link";
import Button from "../ui/Button";
import { FaHome } from "react-icons/fa";

interface NavbarProps {
  // Define any props you want to pass to the Navbar component here
  variant?: "transparent" | "solid";
}

const navLinks = ["Home", "Properties", "MarketPlace"];

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const isTransparent = variant === "transparent";

  return (
    <section
      className={`top-0 left-0 z-50 w-full ${isTransparent ? "absolute" : "sticky  border-b border-black/5"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav
          className={`flex h-20 items-center justify-between ${isTransparent ? "mt-6 rounded-3xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl" : "px-0"}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-semibold">
            <span className={isTransparent ? "text-gray-300" : "text-text"}>
              Next
            </span>
            <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
              Estate
            </span>
          </Link>

          {/* desktop or Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `${item.toLowerCase()}`}
                className={`text-sm font-medium transition hover:text-primary ${isTransparent ? "text-white/80" : "text-text/70"} `}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* desktop or Navigation Links (iconPosition="right" icon = {<FaHome/>}) */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline">Login</Button>
            <Button  variant="outline">
              Add Property
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
}
