import FAQClient from "@/components/partials/faq-client";
import { get_all_faqs } from "@/lib/fetch";
import { Breadcrumbs } from "@/components/breadcrumbs-builder";

export default async function FAQ() {
  const faqs = await get_all_faqs();

  return (
    <>
      <Breadcrumbs current="FAQ" path={[{ href: "/", label: "Home" }]} />
      <FAQClient allFAQs={faqs} />
    </>
  );
}
