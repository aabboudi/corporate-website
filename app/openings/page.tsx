import OpeningsClient from "@/components/partials/openings-client";
import { get_all_openings } from "@/lib/fetch";
import { Breadcrumbs } from "@/components/breadcrumbs-builder";

export default async function Openings() {
  const openings = await get_all_openings();

  return (
    <>
      <Breadcrumbs current="Openings" path={[{ href: "/", label: "Home" }]} />
      <OpeningsClient allOpenings={openings} />
    </>
  );
}
