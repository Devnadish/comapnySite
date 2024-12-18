import Link from "next/link";
import { SheetClose } from "../ui/sheet";
async function MenuItems({ navigation, lang }) {
  const menuStly =
    " border-b-2 border-primary-foreground/40 p-2 px-4 w-full   hover:bg-primary";

  return (
    <div className="flex flex-col items-center justify-around gap-4 capitalize text-foreground w-full ">
      <SheetClose asChild>
        <Link href={`/${lang}`} prefetch={false} className={menuStly}>
          {navigation.home}
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link
          href={`/${lang}/services`}
          as={`/${lang}/services`}
          prefetch={false}
          className={menuStly}
        >
          {navigation.serves}
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          href={`/${lang}/worksample`}
          as={`/${lang}/worksample`}
          prefetch={false}
          className={menuStly}
        >
          {navigation.sample}
        </Link>
      </SheetClose>
    </div>
  );
}

export default MenuItems;
