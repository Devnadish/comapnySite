"use client";
import React from "react";
import { Drawer } from "vaul";

export default function MyDrawer({
  headTitle = "sample",
  btnTXT = "test",
  btnIcon,
  children,
  chip,
}) {
  return (
    <Drawer.Root>
      <Triger
        btnIcon={btnIcon}
        btnTXT={btnTXT}
        count={chip}
        headTitle={headTitle}
      />

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[70%] flex-col rounded-t-[10px] bg-zinc-100 ">
          <div className="flex-1 overflow-auto rounded-t-[10px] bg-primary-foreground p-4 ">
            <div className="h-15 mx-auto mb-8 w-12 flex-shrink-0 rounded-full bg-zinc-900 " />
            <div className="mx-auto max-w-fit ">
              <DrawTItle headTitle={headTitle} />
              {children}
            </div>
          </div>
          <DrawFooter></DrawFooter>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function DrawFooter() {
  return (
    <div className="mt-auto border-t border-zinc-200 bg-black p-4">
      <div className="mx-auto flex max-w-md justify-end gap-6"></div>
    </div>
  );
}

function DrawTItle({ headTitle }) {
  return (
    <Drawer.Title className="mb-4 font-medium">
      <div className="mb-4 flex h-8 w-fit items-center border-b-4 border-black bg-black px-8 ">
        <h1>{headTitle} </h1>
      </div>
    </Drawer.Title>
  );
}

function Triger({ btnIcon, count, headTitle }) {
  return (
    <Drawer.Trigger asChild>
      <button
        variant="ghost"
        className="relative border h-28 min-w-[200px]  w-full flex items-center justify-center flex-col rounded-lg"
      >
        <div className="flex items-center gap-2">{btnIcon}</div>
        {headTitle}
        <div className="absolute left-4 top-0 text-white/50 text-3xl">
          {count}
        </div>
      </button>
    </Drawer.Trigger>
  );
}
