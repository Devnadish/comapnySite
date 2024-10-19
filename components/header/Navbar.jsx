import Logo from "@/components/header/Logo";
import OfferSliedr from "./OfferSliedr";

const Navbar = async ({ lang }) => {
  return (
    <nav
      className={`sticky left-0 top-0 z-50 flex h-[120px] w-full items-center justify-between overflow-hidden p-4 shadow-md ${gradint1}`}
    >
      <Logo />
      <OfferSliedr />
    </nav>
  );
};

export default Navbar;

const gradint1 =
  "bg-gradient-to-t from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-800 lg:static lg:h-auto lg:w-auto ";
