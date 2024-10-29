"use client";
import React from "react";
import { LogosWhatsappIcon } from "@/components/icons/WhatsApp";
import { FlatColorIconsGallery } from "@/components/icons/Gallary";
import { useRouter } from "next/navigation";
import { FluentColorHome48 } from "@/components/icons/HomeIcon";
import { MingcuteSendFill } from "@/components/icons/Contact";

const WhatsAppButton = ({ lang, title }) => {
  const phoneNumber = "0502699023"; // Replace with the actual phone number
  const message = "Hello, I need assistance!"; // Message to pre-fill
  const encodedMessage = encodeURIComponent(message); // URL encode the message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full size-10 w-fit hover:bg-white/80 flex items-center justify-center   flex-row gap-2 p-2"
      aria-label="WhatsApp"
    >
      <div className="animate-pulse">
        <LogosWhatsappIcon />
      </div>
      <span className=" font-tajawal">{title}</span>
    </button>
  );
};

export default WhatsAppButton;

export const WorkProfile = ({ lang, title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${lang}/worksample`);
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full size-10  hover:bg-white/80 flex items-center justify-center flex-col "
      aria-label="gallary"
    >
      <FlatColorIconsGallery />
      <span className="text-xs">{title}</span>
    </button>
  );
};

export const HomePage = ({ lang, title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${lang}/`);
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full size-12  hover:bg-white/80 flex items-center justify-center flex-col "
      aria-label="home"
    >
      <FluentColorHome48 />
      <span className="text-xs">{title}</span>
    </button>
  );
};
export const ContactUs = ({ lang, title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${lang}/contactus`);
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full size-10 w-fit hover:text-black hover:bg-white/80 flex items-center justify-center   flex-row gap-2 p-2"
      aria-label={title}
    >
      <MingcuteSendFill width={38} height={38} />
      <span className="font-tajawal">{title}</span>
    </button>
  );
};
