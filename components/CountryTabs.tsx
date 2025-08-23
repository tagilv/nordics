"use client";

import { Expression } from "@/lib/api";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import { Button } from "./ui/button";

const countries = [
  { key: "swedish", name: "swedish", flag: "", color: "bg-blue-500" },
  { key: "danish", name: "danish", flag: "", color: "bg-red-500" },
  { key: "norwegian", name: "norwegian", flag: "", color: "bg-green-500" },
  { key: "finnish", name: "finnish", flag: "", color: "bg-yellow-500" },
];

interface CountryTabsProps {
  expressions: { [key: string]: Expression[] };
}

export function CountryTabs({ expressions }: CountryTabsProps) {
  const [activeTab, setActiveTab] = useState("swedish");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList>
        {countries.map((country) => (
          <TabsTrigger key={country.key} value={country.key} className="">
            <span className={`${country.flag} w-2 h-2 rounded-full`}></span>
            {country.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {countries.map((country) => (
        <TabsContent key={country.key} value={country.key}>
          <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <CardTitle className="text-3xl font-bold text-white drop-shadow-md">
                  Today's {country.name} Expression
                </CardTitle>{" "}
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
                      <span className="font-semibold text-white">Meaning:</span>{" "}
                      {expressions[country.key][0].meaning}
                    </p>
                  </div>

                  <div className="text-center p-6 border-l-4 border-white/50 bg-white/10 rounded-r-xl backdrop-blur-sm">
                    <p className="text-xl text-white font-medium drop-shadow-sm">
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
                      onClick={() =>
                        (window.location.href = `/facts/${country.key}`)
                      }
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
        </TabsContent>
      ))}
    </Tabs>
  );
}
