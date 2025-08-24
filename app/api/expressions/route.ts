import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { dailyExpressions } from "@/lib/api";

export async function GET(request: NextRequest) {
  try {
    const today = new Date().toISOString().split("T")[0];

    const todaysExpressions = {
      swedish: dailyExpressions.swedish.find((expr) => expr.date === today),
      danish: dailyExpressions.danish.find((expr) => expr.date === today),
      norwegian: dailyExpressions.norwegian.find((expr) => expr.date === today),
      finnish: dailyExpressions.finnish.find((expr) => expr.date === today),
    };

    return NextResponse.json(todaysExpressions);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch daily expressions" },
      { status: 500 }
    );
  }
}
