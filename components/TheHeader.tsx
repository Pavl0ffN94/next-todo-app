import Link from "next/link";
import { memo } from "react";

const TheHeaderImpl = () => {
  return (
    <header className="container">
      <Link href="/"> Home</Link>
      <Link href="/blog"> Blog</Link>
      <Link href="/about"> About</Link>
    </header>
  );
};

export const TheHeader = memo(TheHeaderImpl);
