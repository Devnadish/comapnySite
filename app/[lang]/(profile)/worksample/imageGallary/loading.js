import WorkeSkelton, {
  GallarySkelton,
} from "@/components/shared/skelton/WorkeSkelton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 w-full h-screen">
      <GallarySkelton />
      <GallarySkelton />
      <GallarySkelton />
      <GallarySkelton />
    </div>
  );
}
