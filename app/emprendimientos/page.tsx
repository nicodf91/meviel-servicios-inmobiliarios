import { permanentRedirect } from "next/navigation";

export default function LegacyDevelopmentsPage() {
  permanentRedirect("/desarrollos-propios");
}
