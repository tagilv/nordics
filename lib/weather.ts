export async function getWeatherData() {
  const cities = {
    swedish: "Stockholm",
    danish: "Copenhagen",
    norwegian: "Oslo",
    finnish: "Helsinki",
  };

  try {
    const results = [];

    for (const [lang, city] of Object.entries(cities)) {
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/api/weather?city=${city}`,
          {
            next: { revalidate: 21600 },
            signal: AbortSignal.timeout(10000),
          }
        );

        if (response.ok) {
          const data = await response.json();
          results.push([lang, data]);
        } else {
          console.error(
            `❌ ${city} failed:`,
            response.status,
            response.statusText
          );
          results.push([lang, null]);
        }
      } catch (error) {
        console.error(`❌ ${city} error:`, error);
        results.push([lang, null]);
      }

      if (lang !== "finnish") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    return { weatherData: Object.fromEntries(results), weatherError: null };
  } catch (error) {
    return { weatherData: null, weatherError: "Weather service unavailable" };
  }
}
