import Image from "next/image";
import { CountryTabs } from "@/components/CountryTabs";
import { fallbackExpressions } from "@/lib/api";

export default function Home() {
  const expressions = fallbackExpressions;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <main>
        <div className="min-h-screen p-8">
          <CountryTabs expressions={expressions} />
        </div>
      </main>
    </div>
  );
}
