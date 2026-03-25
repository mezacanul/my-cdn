// import { translate } from "next-intl";
import { NextRequest, NextResponse } from "next/server";
import cms from "@/lib/cms";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ region: string }> }
) {
  // Process Request input
  let content: any;
  const { region } = await params;
  const query = request.nextUrl.searchParams;
  const hasQueries = query.size > 0;

  // Get Content from CMS
  if (!hasQueries) {
    content = await cms.getMain(region);
  } else if (hasQueries) {
    const path = query.get("path");
    const projectId = query.get("projectId");

    switch (path) {
      case "home":
        content = await cms.getHome(region);
        break;
      case "projects":
        content = await cms.selectProject(
          region,
          projectId as string,
        );
        break;
    }
  }

  // Return Content
  if (!content) {
    return NextResponse.json({
      message: "Content not found",
      status: 404,
    });
  }
  return NextResponse.json(content);
}
