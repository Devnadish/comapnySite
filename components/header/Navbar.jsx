import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionary";

const Logo = dynamic(() => import("@/components/header/Logo"), { ssr: false });
const BuregerMenu = dynamic(() => import("./BuregerMenu"), { ssr: false });

const Navbar = async ({ lang }) => {
  // const { navigation } = await getDictionary(lang);

  return (
    <div className="fixed top-0 flex z-50 w-full items-center justify-between p-4 flex-row">
      <BuregerMenu lang={lang} />
      <Logo />
    </div>
  );
};

export default Navbar;
