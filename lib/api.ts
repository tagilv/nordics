import { Expression } from "@/types";

export async function getAllExpressions(): Promise<
  Record<string, Expression[]>
> {
  try {
    const response = await fetch("/api/expressions");
    if (!response.ok) {
      throw new Error("Failed to fetch expressions");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching expressions:", error);
    throw error;
  }
}

export const dailyExpressions = {
  swedish: [
    {
      id: "1",
      date: "2025-08-23",
      country: "swedish",
      expression: "Det är ingen ko på isen",
      pronunciation: "deh air in-gen koo paw ee-sen",
      meaning: "Used when there's no immediate danger or rush",
      translation: "There's no cow on the ice",
    },
    {
      id: "2",
      date: "2025-08-24",
      country: "swedish",
      expression: "Nu har du satt din sista potatis",
      pronunciation: "noo har doo saht din sis-ta po-tah-tis",
      meaning: "Now you've gone too far",
      translation: "Now you've planted your last potato",
    },
  ],
  danish: [
    {
      id: "3",
      date: "2025-08-23",
      country: "danish",
      expression: "Der er ugler i mosen",
      pronunciation: "dair air oog-ler ee mo-sen",
      meaning: "Something suspicious is going on",
      translation: "There are owls in the bog",
    },
    {
      id: "4",
      date: "2025-08-24",
      country: "danish",
      expression: "At have en pind i øret",
      pronunciation: "aht hah-veh en pin ee ur-eh",
      meaning: "To be stubborn or not listen",
      translation: "To have a stick in your ear",
    },
  ],
  norwegian: [
    {
      id: "5",
      date: "2025-08-23",
      country: "norwegian",
      expression: "Å ha en finger med i spillet",
      pronunciation: "aw hah en fing-er meh ee spil-eh",
      meaning: "To be involved in something",
      translation: "To have a finger in the game",
    },
    {
      id: "6",
      date: "2025-08-24",
      country: "norwegian",
      expression: "Det regner trollkjerringer",
      pronunciation: "deh rig-ner trol-shair-ing-er",
      meaning: "It's raining heavily",
      translation: "It's raining troll women",
    },
  ],
  finnish: [
    {
      id: "7",
      date: "2025-08-23",
      country: "finnish",
      expression: "Olla kuin perseeseen ammuttu karhu",
      pronunciation: "ol-la koo-in per-say-sen am-mut-tu kar-hu",
      meaning: "To be very angry or irritated",
      translation: "To be like a bear shot in the butt",
    },
    {
      id: "8",
      date: "2025-08-24",
      country: "finnish",
      expression: "Antaa palaa",
      pronunciation: "an-taa pa-laa",
      meaning: "To go all out, give it your all",
      translation: "Let it burn",
    },
  ],
};

export const countryInfo = {
  swedish: {
    funFacts: [
      "Lagom - unique word meaning 'just the right amount'",
      "Melodic intonation - sounds like singing with pitch accents",
      "Compound words - 'sjukhus' = sick + house = hospital",
    ],
    learningTime: [
      "Basic fluency: 6-8 months (daily study)",
      "Full fluency: 2-3 years",
      "Difficulty: Easiest for English speakers among Nordic languages",
    ],
  },
  danish: {
    funFacts: [
      "Hygge - famous concept of cozy contentment",
      "Soft pronunciation - they 'swallow' many consonants",
      "Stød - unique glottal stop (sounds like clearing throat)",
    ],
    learningTime: [
      "Basic fluency: 8-10 months (daily study)",
      "Full fluency: 2.5-3.5 years",
      "Difficulty: Hardest pronunciation among Nordic languages",
    ],
  },
  norwegian: {
    funFacts: [
      "Two written standards - Bokmål and Nynorsk",
      "Clear pronunciation - most letters are pronounced",
      "Koselig - similar to Danish 'hygge' but Norwegian style",
    ],
    learningTime: [
      "Basic fluency: 7-9 months (daily study)",
      "Full fluency: 2-3 years",
      "Most similar to Swedish: learn one, understand the other",
    ],
  },
  finnish: {
    funFacts: [
      "15 grammatical cases (English has 3, German has 4)",
      "Vowel harmony - vowels must 'agree' with each other",
      "No future tense - they use present tense for future",
    ],
    learningTime: [
      "Basic fluency: 12-18 months (daily study)",
      "Full fluency: 4-6 years",
      "Most challenging: different language family (Uralic)",
    ],
  },
};
