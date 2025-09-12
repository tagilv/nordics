import { Expression, CountryInfo } from "@/types";
import prisma from "./db";

export async function getDailyExpressions() {
  const countries = ["swedish", "danish", "norwegian", "finnish"];

  const today = new Date().toISOString().split("T")[0];

  const expressions = await Promise.all(
    countries.map(async (country) => {
      let expression = await prisma.expression.findFirst({
        where: {
          country,
          date: today,
        },
      });

      if (!expression) {
        expression = await prisma.expression.findFirst({
          where: { country },
          orderBy: { date: "desc" },
        });
      }

      return expression;
    })
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
      funFacts: info.funFacts.map((fact) => {
        const [title, description] = fact.split(" - ");
        return {
          title: title || "",
          description: description || "",
        };
      }),
      learningTime: info.learningTime.map((time) => {
        const [level, duration] = time.split(": ");
        return {
          level: level || "",
          duration: duration || "",
        };
      }),
    };
    return acc;
  }, {} as Record<string, CountryInfo>);
}
