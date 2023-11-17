import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link href="" className="text-primary font-semibold text-2xl">
          ST PIZZA
        </Link>
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href="">Login</Link>
        <Link href="" className="bg-primary rounded-full text-white px-8 py-2">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
