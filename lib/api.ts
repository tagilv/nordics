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
