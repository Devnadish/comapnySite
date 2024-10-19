import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
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
        <button className="bg-white/50 rounded-full size-12  hover:bg-white/80 flex items-center justify-center ">
          <HeroiconsSolidMenuAlt3 />
        </button>
      </SheetTrigger>
      <SheetContent
        forceMount
        position="right"
        className="w-72 flex flex-col items-start justify-between"
      >
        <SheetHeader>
          <SheetTitle>Excited To Serve You</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <MenuItems lang={lang} navigation={navigation} />

        <SheetFooter>
          <LanguageSwitcher />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
