import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex w-full flex-wrap items-center justify-center  gap-2    p-4">
      <Skeleton className="h-[50vh] w-full min-w-[400px] bg-white/10" />
      <Skeleton className="h-[50vh] w-full min-w-full bg-white/10" />
      <Skeleton className="h-[50vh] w-full min-w-full bg-white/10" />
    </div>
  );
}
