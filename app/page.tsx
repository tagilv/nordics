import { CountryTabs } from "@/components/CountryTabs";
import { dailyExpressions } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { WeatherWidget } from "@/components/WeatherWidget";

export default async function Home() {
  const expressions = dailyExpressions;

  const cities = {
    swedish: "Stockholm",
    danish: "Copenhagen",
    norwegian: "Oslo",
    finnish: "Helsinki",
  };

  let weatherData = null;
  let weatherError = null;
  try {
    const weatherPromises = Object.entries(cities).map(async ([lang, city]) => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/api/weather?city=${city}`,
        {
          next: { revalidate: 10000000 },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return [lang, data];
      }
      return [lang, null];
    });

    const results = await Promise.all(weatherPromises);
    weatherData = Object.fromEntries(results);
  } catch (error) {
    weatherError = "Weather service unavailable";
  }

  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function NordicBackground() {
    return (
      <div className="absolute inset-0 z-0 nordic-landscape">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 via-transparent to-teal-700/40"></div>

        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-400/35 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform -skew-y-3 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-0 w-full h-24 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent transform skew-y-2 animate-pulse delay-1500"></div>
        </div>

        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NordicBackground />
      <main className="relative z-10 container mx-auto px-6 py-12 pt-20">
        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="absolute -top-4 right-0 z-20 md:top-0">
            {" "}
            <WeatherWidget
              weatherError={weatherError}
              allWeatherData={weatherData}
            />
          </div>

          <div className="text-center pt-2">
            <h1 className="text-5xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
              Nordic Expressions
            </h1>
            <p className="text-xl text-white/90 mb-6 font-light drop-shadow-md">
              Discover daily wisdom from the North
            </p>
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 border-white/30 text-white bg-white/10 backdrop-blur-sm"
            >
              {todayDate}
            </Badge>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <CountryTabs expressions={expressions} />
        </div>
      </main>
    </div>
  );
}
