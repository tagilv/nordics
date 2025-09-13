"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useReducer, useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { Expression, CountryInfo } from "@/types";

const countries = [
  { key: "swedish", name: "Swedish", flag: "🇸🇪", color: "bg-blue-500" },
  { key: "danish", name: "Danish", flag: "🇩🇰", color: "bg-red-500" },
  { key: "norwegian", name: "Norwegian", flag: "🇳🇴", color: "bg-green-500" },
  { key: "finnish", name: "Finnish", flag: "🇫🇮", color: "bg-yellow-500" },
];

interface CountryTabsProps {
  expressions: Record<string, Expression[]>;
  countryInfo: Record<string, CountryInfo>;
}

interface FlipState {
  [key: string]: boolean;
}

interface FlipAction {
  type: "FLIP" | "RESET";
  country: string;
}

function flipReducer(state: FlipState, action: FlipAction): FlipState {
  return { ...state, [action.country]: action.type === "FLIP" };
}

export function CountryTabs({ expressions, countryInfo }: CountryTabsProps) {
  const activeTab = useLanguageStore((state) => state.activeLanguage);
  const [isHydrated, setIsHydrated] = useState(false);

  const [flipState, dispatch] = useReducer(flipReducer, {});
  const setActiveLanguage = useLanguageStore.getState().setActiveLanguage;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-white/70">Loading...</div>
      </div>
    );
  }

  const handleTabChange = (value: string) => {
    setActiveLanguage(value);
  };

  const handleFlip = (country: string) => {
    dispatch({ type: "FLIP", country });
  };

  const handleReset = (country: string) => {
    dispatch({ type: "RESET", country });
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-2 h-14 p-1 bg-white/20 backdrop-blur-md border border-white/20">
        {countries.map((country) => (
          <TabsTrigger
            key={country.key}
            value={country.key}
            className="flex items-center gap-2 text-sm font-medium text-white/80 data-[state=active]:bg-white/30 data-[state=active]:text-white transition-all duration-200 hover:!bg-white/40 cursor-pointer"
          >
            <span className="text-lg">{country.flag}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {countries.map((country) => (
        <TabsContent key={country.key} value={country.key}>
          <div className="relative">
            <div
              className={`transition-opacity duration-300 ${
                flipState[country.key]
                  ? "opacity-0 pointer-events-none absolute inset-0"
                  : "opacity-100"
              }`}
            >
              <Card
                className="shadow-2xl border-0 bg-white/10 backdrop-blur-md border border-white/20 h-[480px] md:min-h-[600px] cursor-pointer hover:bg-white/15 transition-all duration-200 pt-0 pb-6 md:py-6 flex flex-col"
                onClick={() => handleFlip(country.key)}
              >
                <CardHeader className="text-center pb-2 md:pb-4">
                  <div className="flex items-center justify-center gap-4 mb-4 hidden md:flex">
                    <span className="text-4xl">{country.flag}</span>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                      Today&apos;s {country.name} Expression
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 pb-8 ">
                  {expressions[country.key] &&
                  expressions[country.key].length > 0 ? (
                    <>
                      <div className="text-center p-4 md:p-8 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                        <p className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed drop-shadow-md">
                          &quot;{expressions[country.key][0].expression}&quot;
                        </p>
                        {expressions[country.key][0].pronunciation && (
                          <p className="text-base text-white/70 italic font-light drop-shadow-sm">
                            Pronunciation:{" "}
                            {expressions[country.key][0].pronunciation}
                          </p>
                        )}
                      </div>

                      <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                        <p className="text-base md:text-lg text-white/80 font-light drop-shadow-sm leading-relaxed">
                          <span className="text-white/60 mr-2">=</span>
                          {expressions[country.key][0].meaning}
                        </p>
                      </div>

                      <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                        <p className="text-base md:text-lg text-white font-medium drop-shadow-md">
                          <span className="text-white/60 mr-2">→</span>
                          {expressions[country.key][0].translation}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-white/70 text-lg drop-shadow-sm">
                        No expression available for {country.name} today.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-opacity duration-300 ${
                flipState[country.key]
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
            >
              <Card
                className="shadow-2xl border-0 bg-white/10 backdrop-blur-md border border-white/20 h-[450px] md:h-[600px] cursor-pointer hover:bg-white/15 transition-all duration-200 pt-0 pb-6 md:py-6 flex flex-col"
                onClick={() => handleReset(country.key)}
              >
                <CardHeader className="text-center pb-2 md:pb-4">
                  <div className="flex items-center justify-center gap-4 mb-4 hidden md:flex">
                    <span className="text-4xl">{country.flag}</span>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                      About the {country.name} Language
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 md:space-y-6">
                  <div className="bg-white/15 rounded-lg pt-2 pb-6 px-6 md:p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      🎯Fun Facts
                    </h3>
                    <ul className="text-white/80 space-y-2 text-sm text-left">
                      {countryInfo[
                        country.key as keyof typeof countryInfo
                      ].funFacts.map((fact, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2 mt-0.5">•</span>
                          <span>
                            <span className="font-semibold text-white">
                              {fact.title}
                            </span>
                            {fact.description && (
                              <span className="text-white/80">
                                {" "}
                                - {fact.description}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/15 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      🌍 Language Journey
                    </h3>
                    <ul className="text-white/80 space-y-1 text-sm text-left">
                      {countryInfo[
                        country.key as keyof typeof countryInfo
                      ].learningTime.map((time, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2 mt-0.5">•</span>
                          <span>
                            <span className="font-semibold text-white">
                              {time.level}:
                            </span>
                            <span className="text-white/80 ml-1">
                              {time.duration}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
