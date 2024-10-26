import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Collabs({
  title,
  children,
  icon,
  lang,
  isOpen = false, // New prop to control open/close state
}) {
  // Define font classes based on the language
  const fontClass = lang === "ar" ? "font-lateef" : "font-luckiest";

  return (
    <Accordion
      type="single"
      className="w-full"
      collapsible
      defaultValue={isOpen ? "item-1" : undefined}
    >
      <AccordionItem
        value="item-1"
        className="w-full items-center justify-between border-0"
      >
        <AccordionTrigger
          className={`text-3xl text-white/90 mb-4 ${fontClass} w-full bg-background/20 rounded-lg p-4 flex flex-row items-center`}
        >
          {icon}
          {title}
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-2 w-full">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
