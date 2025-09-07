import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed Expressions
  const expressions = [
    {
      date: "2025-01-15",
      country: "swedish",
      expression: "lagom",
      pronunciation: "LAH-gom",
      meaning: "Just the right amount",
      translation: "Not too much, not too little",
    },
    {
      date: "2025-01-15",
      country: "danish",
      expression: "hygge",
      pronunciation: "HOO-guh",
      meaning: "Cozy, comfortable feeling",
      translation: "A feeling of coziness and contentment",
    },
    {
      date: "2025-01-15",
      country: "norwegian",
      expression: "koselig",
      pronunciation: "KOO-suh-lee",
      meaning: "Cozy and pleasant",
      translation: "A feeling of warmth and coziness",
    },
    {
      date: "2025-01-15",
      country: "finnish",
      expression: "sisu",
      pronunciation: "SEE-soo",
      meaning: "Determination and resilience",
      translation: "Inner strength and perseverance",
    },
  ];

  for (const expression of expressions) {
    await prisma.expression.upsert({
      where: {
        date_country: {
          date: expression.date,
          country: expression.country,
        },
      },
      update: expression,
      create: expression,
    });
  }

  // Seed CountryInfo
  const countryInfo = [
    {
      country: "swedish",
      funFacts: [
        "Swedish has no future tense - they use present tense for future",
        'The word "lagom" has no direct English translation',
        'Swedish uses "du" (you) for everyone, even the king',
      ],
      learningTime: [
        "Basic conversation: 3-6 months",
        "Fluency: 1-2 years",
        "Native-like: 3-5 years",
      ],
    },
    {
      country: "danish",
      funFacts: [
        "Danish has 3 extra letters: æ, ø, å",
        'The word "hygge" is now used worldwide',
        "Danish numbers are based on 20s (like French)",
      ],
      learningTime: [
        "Basic conversation: 4-8 months",
        "Fluency: 1.5-2.5 years",
        "Native-like: 4-6 years",
      ],
    },
    {
      country: "norwegian",
      funFacts: [
        "Norwegian has two written forms: Bokmål and Nynorsk",
        'The word "koselig" is similar to Danish "hygge"',
        "Norwegian is very similar to Swedish and Danish",
      ],
      learningTime: [
        "Basic conversation: 3-6 months",
        "Fluency: 1-2 years",
        "Native-like: 3-5 years",
      ],
    },
    {
      country: "finnish",
      funFacts: [
        "Finnish is not related to other Nordic languages",
        'The word "sisu" represents Finnish character',
        "Finnish has 15 cases for nouns",
      ],
      learningTime: [
        "Basic conversation: 6-12 months",
        "Fluency: 2-4 years",
        "Native-like: 5-8 years",
      ],
    },
  ];

  for (const info of countryInfo) {
    await prisma.countryInfo.upsert({
      where: { country: info.country },
      update: info,
      create: info,
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
