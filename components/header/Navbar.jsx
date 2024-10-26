import Logo from "@/components/header/Logo";
import BuregerMenu from "./BuregerMenu";
import { getDictionary } from "@/lib/dictionary";

const Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div
      className={`fixed top-0 flex  z-10  w-full items-center justify-between   p-4   flex-col   `}
    >
      <Header lang={lang} navigation={navigation} />
    </div>
  );
};

export default Navbar;

const Header = ({ lang, navigation }) => {
  return (
    <div className="flex items-center   w-full  h-[70px] justify-between px-4 rounded-lg">
      <BuregerMenu navigation={navigation} lang={lang} />
      <div className="flex items-center flex-row gap-2">
        <Logo />
      </div>
    </div>
  );
};
