export interface Expression {
  id: string;
  expression: string;
  pronunciation: string;
  meaning: string;
  translation: string;
  country: string;
}

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

export const fallbackExpressions = {
  swedish: [
    {
      id: "1",
      expression: "Det är ingen ko på isen",
      pronunciation: "deh air in-gen koo paw ee-sen",
      meaning: "Used when there's no immediate danger or rush",
      translation: "There's no cow on the ice",
      country: "swedish",
    },
  ],
  danish: [
    {
      id: "1",
      expression: "Det är ingen ko på isen",
      pronunciation: "deh air in-gen koo paw ee-sen",
      meaning: "Used when there's no immediate danger or rush",
      translation: "There's no cow on the ice",
      country: "swedish",
    },
  ],
  norwegian: [
    {
      id: "1",
      expression: "Det är ingen ko på isen",
      pronunciation: "deh air in-gen koo paw ee-sen",
      meaning: "Used when there's no immediate danger or rush",
      translation: "There's no cow on the ice",
      country: "swedish",
    },
  ],
  finnish: [
    {
      id: "1",
      expression: "Det är ingen ko på isen",
      pronunciation: "deh air in-gen koo paw ee-sen",
      meaning: "Used when there's no immediate danger or rush",
      translation: "There's no cow on the ice",
      country: "swedish",
    },
  ],
};
