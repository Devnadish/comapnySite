import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuItems from "./MenuItems";
import { HeroiconsSolidMenuAlt3 } from "../icons/MenuIcon";
import LanguageSwitcher from "../LanguageSwitcher";

export default function BuregerMenu({ navigation, lang }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="  rounded-full size-10    flex items-center justify-center text-foreground flex-col">
          {/* <HeroiconsSolidMenuAlt3 />
          <span className="text-xs">{navigation.menu}</span> */}
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent
        forceMount
        position="right"
        className="w-72 flex flex-col items-start justify-between"
      >
        <SheetHeader className="w-full justify-center items-center">
          <SheetTitle>{navigation.sheetTilte}</SheetTitle>
          <SheetDescription className="w-full justify-center items-center text-center">
            {navigation.sheetDesction}
          </SheetDescription>
        </SheetHeader>
        <MenuItems lang={lang} navigation={navigation} />

        <SheetFooter className="w-full justify-center items-center">
          <LanguageSwitcher />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const MenuIcon = () => {
  return (
    <div className="w-[50px] h-[60px] bg-[#FF5E00] rounded-md flex items-center justify-center gap-1 flex-col">
      <div className="w-[40px] h-[6px] bg-[#000080] rounded-md" />
      <div className="w-[40px] h-[6px] bg-[#ffd700] rounded-md" />
      <div className="w-[40px] h-[6px] bg-[#40e0d0] rounded-md" />
    </div>
  );
};
