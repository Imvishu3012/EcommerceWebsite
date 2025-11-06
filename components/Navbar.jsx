import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow-md p-4 flex justify-between">
      <Link href="/" className="font-bold text-lg text-white w-auto">
        E Commerce Website
      </Link>
      <div className="flex gap-4">
        <Link className="hover:text-cyan-300 transition-all duration-100" href="/">Home</Link>
        <Link className="hover:text-cyan-300 transition-all duration-100" href="/best-selling">Best Selling</Link>
        <Link className="hover:text-cyan-300 transition-all duration-100" href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
