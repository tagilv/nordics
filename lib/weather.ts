export async function getWeatherData() {
  const cities = {
    swedish: "Stockholm",
    danish: "Copenhagen",
    norwegian: "Oslo",
    finnish: "Helsinki",
  };

  try {
    const weatherPromises = Object.entries(cities).map(async ([lang, city]) => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/api/weather?city=${city}`,
        { next: { revalidate: 3600 } }
      );

      if (response.ok) {
        const data = await response.json();
        return [lang, data];
      }
      return [lang, null];
    });

    const results = await Promise.all(weatherPromises);
    return { weatherData: Object.fromEntries(results), weatherError: null };
  } catch (error) {
    return { weatherData: null, weatherError: "Weather service unavailable" };
  }
}
