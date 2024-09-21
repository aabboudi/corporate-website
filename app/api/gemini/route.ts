import { NextRequest, NextResponse } from "next/server";
import { DB } from "@/drizzle/setup";
import { GenerateArticle, GenerateOpening } from "@/server/gemini";
import { Articles, Openings } from "@/drizzle/schema";
import { ReportStatus } from "@/server/report-status";

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const key = req.headers.get("WORKFLOW_TOKEN");

  if (req.method === "POST" && key === process.env.WORKFLOW_TOKEN!) {
    try {
      const [newArticle, newOpening] = await Promise.all([
        GenerateArticle(),
        GenerateOpening(),
      ]);

      await Promise.all([
        DB.insert(Articles).values(newArticle),
        DB.insert(Openings).values(newOpening),
      ]);

      await ReportStatus(200);
      return NextResponse.json({ message: `${new Date()} - Task completed successfully`});
    } catch (error) {
      await ReportStatus(500)
      return NextResponse.json({ message: `${new Date()} - Task failed: ${error}` }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: `${new Date()} - Unauthorized request` }, { status: 401 });
  }
}
