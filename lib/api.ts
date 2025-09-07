import { Expression } from "@/types";
import prisma from "./db";

export async function getDailyExpressions() {
  const countries = ["swedish", "danish", "norwegian", "finnish"];

  const expressions = await Promise.all(
    countries.map((country) =>
      prisma.expression.findFirst({
        where: { country },
        orderBy: { date: "desc" },
      })
    )
  );

  return expressions.reduce((acc, expr) => {
    if (expr) {
      acc[expr.country] = [expr];
    }
    return acc;
  }, {} as Record<string, Expression[]>);
}

export async function getCountryInfo() {
  const countryInfo = await prisma.countryInfo.findMany();

  return countryInfo.reduce((acc, info) => {
    acc[info.country] = {
      funFacts: info.funFacts,
      learningTime: info.learningTime,
    };
    return acc;
  }, {} as Record<string, { funFacts: string[]; learningTime: string[] }>);
}
