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
