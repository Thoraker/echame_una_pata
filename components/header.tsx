// components/Header.tsx
import Link from "next/link";
import { topLinks } from "@/lib/links";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <div className="min-h-full min-w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="mx-auto flex items-center justify-end gap-3">
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Navbar />
    </>
  );
}
