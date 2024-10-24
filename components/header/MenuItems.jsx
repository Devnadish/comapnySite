import Link from "next/link";
async function MenuItems({ navigation, lang }) {
  const menuStly =
    " border-b-2 border-primary-foreground/40 p-2 px-4 w-full   hover:bg-primary";

  return (
    <div className="flex flex-col items-center justify-around gap-4 capitalize text-foreground w-full ">
      <Link href={`/${lang}`} prefetch={false} className={menuStly}>
        {navigation.home}
      </Link>
      {/* <Link href={`/${lang}/price`} prefetch={false} className={menuStly}>
        {navigation.price}
      </Link> */}

      <Link
        href={`/${lang}/services`}
        as={`/${lang}/services`}
        prefetch={false}
        className={menuStly}
      >
        {navigation.serves}
      </Link>
      {/* <Link
        href={`/${lang}/dashboard`}
        as={`/${lang}/dashboard`}
        prefetch={false}
        className={menuStly}
      >
        Offer
      </Link> */}
      <Link
        href={`/${lang}/worksample`}
        as={`/${lang}/worksample`}
        prefetch={false}
        className={menuStly}
      >
        {navigation.sample}
      </Link>

      {/* <Link
        href={`/${lang}/blog/`}
        as={`/${lang}/blog/`}
        prefetch={false}
        className={menuStly}
      >
        {navigation.blog}
      </Link> */}
    </div>
  );
}

export default MenuItems;
