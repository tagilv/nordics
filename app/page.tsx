import Image from "next/image";
import { CountryTabs } from "@/components/CountryTabs";
import { fallbackExpressions } from "@/lib/api";

export default function Home() {
  const expressions = fallbackExpressions;
  return (
    <div className="min-h-screen">
      <main>
        <div className="min-h-screen p-8">
          <CountryTabs expressions={expressions} />
        </div>
      </main>
    </div>
  );
}
