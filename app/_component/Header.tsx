import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-20 py-5">
      <div className="flex gap-4">
        <h2 className="border-r-2 pr-3">Logo</h2>

        <ul className="flex gap-3">
          <li className="font-semibold hover:text-primary">
            <Link href="/home">Home</Link>
          </li>
          <li className="font-semibold  hover:text-primary">
            <Link href="/about">About</Link>
          </li>

          <li className="font-semibold hover:text-primary">
            <Link href="/service">Service</Link>
          </li>
          <li className="font-semibold hover:text-primary">
            <Link href="contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <Button className="px-4 py-3 text-white font-semibold rounded-md text-[1rem]">
        GET STARTED
      </Button>
    </nav>
  );
};

export default Header;
