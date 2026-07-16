import { notFound } from "next/navigation";
import { ActivityDetailPage } from "@/components/activities/ActivityDetailPage";
import { activities } from "@/lib/data";

const activitiesData = Object.fromEntries(
  activities.map((a) => [a.slug, a])
);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (params as any).slug as string;
  const activity = activitiesData[slug];
  if (!activity) notFound();
  return <ActivityDetailPage {...activity} slug={slug} />;
}
