import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { fallbackExpressions } from "@/lib/api";

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
