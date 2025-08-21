import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const fallbackExpressions = {
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

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(fallbackExpressions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch expressions" },
      { status: 500 }
    );
  }
}
