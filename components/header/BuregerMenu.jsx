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
        <button className="  rounded-full size-12    flex items-center justify-center ">
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
            Welcome! I'm here to assist you with all your needs, from answering
            questions to providing insights. Let’s explore new ideas together!
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
