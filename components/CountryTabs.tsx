"use client";

import { Expression } from "@/lib/api";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const countries = [
  { key: "swedish", name: "swedish", flag: "", color: "bg-blue-500" },
  { key: "danish", name: "danish", flag: "", color: "bg-red-500" },
  { key: "norwegian", name: "norwegian", flag: "", color: "bg-green-500" },
  { key: "finnish", name: "finnish", flag: "", color: "bg-yellow-500" },
];
interface CountryTabsProps {
  expressions: Record<
    string,
    {
      id: string;
      date: string;
      expression: string;
      pronunciation: string;
      meaning: string;
      translation: string;
    }[]
  >;
}

export function CountryTabs({ expressions }: CountryTabsProps) {
  const [activeTab, setActiveTab] = useState("swedish");
  const router = useRouter();
  // ADDED: Flip state for all country cards
  const [isSwedishFlipped, setIsSwedishFlipped] = useState(false);
  const [isDanishFlipped, setIsDanishFlipped] = useState(false);
  const [isNorwegianFlipped, setIsNorwegianFlipped] = useState(false);
  const [isFinnishFlipped, setIsFinnishFlipped] = useState(false);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 h-14 p-1 bg-white/20 backdrop-blur-md border border-white/20">
        {countries.map((country) => (
          <TabsTrigger
            key={country.key}
            value={country.key}
            className="flex items-center gap-2 text-sm font-medium text-white/80 data-[state=active]:bg-white/30 data-[state=active]:text-white transition-all duration-200 hover:!bg-white/40 cursor-pointer"
          >
            <span className="text-lg">{country.flag}</span>
            {country.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {countries.map((country) => (
        <TabsContent key={country.key} value={country.key}>
          <div className="relative">
            <div
              className={`transition-opacity duration-300 ${
                (country.key === "swedish" && isSwedishFlipped) ||
                (country.key === "danish" && isDanishFlipped) ||
                (country.key === "norwegian" && isNorwegianFlipped) ||
                (country.key === "finnish" && isFinnishFlipped)
                  ? "opacity-0 pointer-events-none absolute inset-0"
                  : "opacity-100"
              }`}
            >
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-md border border-white/20 min-h-[800px]">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <CardTitle className="text-3xl font-bold text-white drop-shadow-md">
                      Today's {country.name} Expression
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg text-white/80 drop-shadow-sm">
                    Learn something beautiful from {country.name.toLowerCase()}{" "}
                    culture
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {expressions[country.key] &&
                  expressions[country.key].length > 0 ? (
                    <>
                      <div className="text-center p-8 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                        <p className="text-4xl font-bold text-white mb-6 leading-relaxed drop-shadow-md">
                          "{expressions[country.key][0].expression}"
                        </p>
                        {expressions[country.key][0].pronunciation && (
                          <p className="text-base text-white/70 italic font-light drop-shadow-sm">
                            Pronunciation:{" "}
                            {expressions[country.key][0].pronunciation}
                          </p>
                        )}
                      </div>

                      <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                        <p className="text-lg text-white/80 font-light drop-shadow-sm leading-relaxed">
                          <span className="font-semibold text-white">
                            Meaning:
                          </span>{" "}
                          {expressions[country.key][0].meaning}
                        </p>
                      </div>

                      <div className="text-center p-6 border-l-4 border-white/50 bg-white/10 rounded-r-xl backdrop-blur-sm">
                        <p className="text-xl text-white font-medium drop-shadow-md">
                          <span className="font-bold">Translation:</span>{" "}
                          {expressions[country.key][0].translation}
                        </p>
                      </div>
                      <div className="text-center text-base text-white/70 font-light drop-shadow-sm">
                        <p>Return tomorrow for another Nordic treasure ✨</p>
                      </div>

                      <div className="text-center pt-4 border-t border-white/20">
                        <Button
                          variant="outline"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                          onClick={() => {
                            if (country.key === "swedish")
                              setIsSwedishFlipped(true);
                            if (country.key === "danish")
                              setIsDanishFlipped(true);
                            if (country.key === "norwegian")
                              setIsNorwegianFlipped(true);
                            if (country.key === "finnish")
                              setIsFinnishFlipped(true);
                          }}
                        >
                          Learn More About {country.name} 🏛️
                        </Button>
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
                (country.key === "swedish" && isSwedishFlipped) ||
                (country.key === "danish" && isDanishFlipped) ||
                (country.key === "norwegian" && isNorwegianFlipped) ||
                (country.key === "finnish" && isFinnishFlipped)
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
            >
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-md border border-white/20 min-h-[800px]">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <CardTitle className="text-3xl font-bold text-white drop-shadow-md">
                      About {country.name} Language
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg text-white/80 drop-shadow-sm">
                    Discover fascinating facts and learning insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {country.key === "swedish" && (
                    <>
                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          🎯 Fun Facts:
                        </h3>
                        <ul className="text-white/80 space-y-2 text-sm text-left">
                          <li>
                            • <strong>"Lagom"</strong> - unique word meaning
                            "just the right amount"
                          </li>
                          <li>
                            • <strong>Melodic intonation</strong> - sounds like
                            singing with pitch accents
                          </li>
                          <li>
                            • <strong>Compound words</strong> - "sjukhus" = sick
                            + house = hospital
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          ⏱️ Learning Time:
                        </h3>
                        <ul className="text-white/80 space-y-1 text-sm text-left">
                          <li>
                            • <strong>Basic fluency:</strong> 6-8 months (daily
                            study)
                          </li>
                          <li>
                            • <strong>Full fluency:</strong> 2-3 years
                          </li>
                          <li>
                            • <strong>Easiest</strong> for English speakers
                            among Nordic languages
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {country.key === "danish" && (
                    <>
                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          🎯 Fun Facts:
                        </h3>
                        <ul className="text-white/80 space-y-2 text-sm text-left">
                          <li>
                            • <strong>"Hygge"</strong> - famous concept of cozy
                            contentment
                          </li>
                          <li>
                            • <strong>Soft pronunciation</strong> - they
                            "swallow" many consonants
                          </li>
                          <li>
                            • <strong>"Stød"</strong> - unique glottal stop
                            (sounds like clearing throat)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          ⏱️ Learning Time:
                        </h3>
                        <ul className="text-white/80 space-y-1 text-sm text-left">
                          <li>
                            • <strong>Basic fluency:</strong> 8-10 months (daily
                            study)
                          </li>
                          <li>
                            • <strong>Full fluency:</strong> 2.5-3.5 years
                          </li>
                          <li>
                            • <strong>Hardest pronunciation</strong> among
                            Nordic languages
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {country.key === "norwegian" && (
                    <>
                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          🎯 Fun Facts:
                        </h3>
                        <ul className="text-white/80 space-y-2 text-sm text-left">
                          <li>
                            • <strong>Two written standards</strong> - Bokmål
                            and Nynorsk
                          </li>
                          <li>
                            • <strong>Clear pronunciation</strong> - most
                            letters are pronounced
                          </li>
                          <li>
                            • <strong>"Koselig"</strong> - similar to Danish
                            "hygge" but Norwegian style
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          ⏱️ Learning Time:
                        </h3>
                        <ul className="text-white/80 space-y-1 text-sm text-left">
                          <li>
                            • <strong>Basic fluency:</strong> 7-9 months (daily
                            study)
                          </li>
                          <li>
                            • <strong>Full fluency:</strong> 2-3 years
                          </li>
                          <li>
                            • <strong>Most similar to Swedish</strong> - learn
                            one, understand the other
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {country.key === "finnish" && (
                    <>
                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          🎯 Fun Facts:
                        </h3>
                        <ul className="text-white/80 space-y-2 text-sm text-left">
                          <li>
                            • <strong>15 grammatical cases</strong> (English has
                            3, German has 4)
                          </li>
                          <li>
                            • <strong>Vowel harmony</strong> - vowels must
                            "agree" with each other
                          </li>
                          <li>
                            • <strong>"Sisu"</strong> - concept of determination
                            and resilience
                          </li>
                          <li>
                            • <strong>Longest word:</strong>{" "}
                            "lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas"
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/15 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          ⏱️ Learning Time:
                        </h3>
                        <ul className="text-white/80 space-y-1 text-sm text-left">
                          <li>
                            • <strong>Basic fluency:</strong> 12-18 months
                            (daily study)
                          </li>
                          <li>
                            • <strong>Full fluency:</strong> 4-6 years
                          </li>
                          <li>
                            • <strong>Most challenging</strong> - different
                            language family (Uralic)
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  <div className="text-center pt-4 border-t border-white/20">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                      onClick={() => {
                        if (country.key === "swedish")
                          setIsSwedishFlipped(false);
                        if (country.key === "danish") setIsDanishFlipped(false);
                        if (country.key === "norwegian")
                          setIsNorwegianFlipped(false);
                        if (country.key === "finnish")
                          setIsFinnishFlipped(false);
                      }}
                    >
                      ← Back to Expression
                    </Button>
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
