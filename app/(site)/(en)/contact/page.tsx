import { contactMeta, ContactPage } from "@/components/site/pages/ContactPages";

export const metadata = contactMeta("en");

export default function Page() {
  return <ContactPage lang="en" />;
}
