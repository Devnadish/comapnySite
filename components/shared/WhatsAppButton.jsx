"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogosWhatsappIcon } from "../icons/WhatsApp";
import { FlatColorIconsGallery } from "../icons/Gallary";

const WhatsAppButton = () => {
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
      className="bg-white/50 rounded-full size-12  hover:bg-white/80 flex items-center justify-center animate-pulse"
    >
      <LogosWhatsappIcon />
    </button>
  );
};

export default WhatsAppButton;

export const WorkProfile = () => {
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
      className="bg-white/50 rounded-full size-12  hover:bg-white/80 flex items-center justify-center "
    >
      <FlatColorIconsGallery />
    </button>
  );
};
