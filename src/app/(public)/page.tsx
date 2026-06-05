import HomeClient from "@/components/home/home-client";
import type { queryParams } from "@/features/types/challenge.type";

type HomePageProps = {
  searchParams: Promise<queryParams>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const queryParams = await searchParams;

  return <HomeClient queryParams={queryParams} />;
}
