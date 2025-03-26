import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <Link href="/" className="text-2xl font-bold">
        My Portfolio
      </Link>
      <div className="flex gap-4">
        <Link href="#about" className="hover:text-gray-500">
          About
        </Link>
        <Link href="#projects" className="hover:text-gray-500">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-gray-500">
          Contact
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
