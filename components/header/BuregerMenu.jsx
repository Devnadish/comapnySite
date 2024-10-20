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
        <button className="  rounded-full size-10    flex items-center justify-center ">
          <HeroiconsSolidMenuAlt3 />
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
