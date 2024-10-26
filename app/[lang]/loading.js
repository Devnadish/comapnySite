import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex w-fll flex-wrap items-center justify-center  gap-2    p-4">
      <Skeleton className="h-[50vh] w-full bg-white/10" />
      <Skeleton className="h-[50vh] w-full bg-white/10" />
      <Skeleton className="h-[50vh] w-full bg-white/10" />
    </div>
  );
}
