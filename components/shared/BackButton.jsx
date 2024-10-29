"use client";
import React from "react";
import { BackIcon } from "@/components/icons/BackIcon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="w-10 h-10"
      onClick={() => router.back()}
    >
      <BackIcon width={24} height={24} />
    </Button>
  );
}

export default BackButton;
