import files from "@/lib/files";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ region: string }> }
) {
  // Retrieve Request parameters
  const { region } = await params;
  const query = request.nextUrl.searchParams;
  const projectId = query.get("projectId");
  const resource = query.get("resource");

  // Validate Request parameters
  if (!projectId || !resource) {
    return NextResponse.json({
      message: "Project ID and resource are required",
      status: 400,
    });
  }

  // Get Content from Files
  // *TODO: Setup DB and ORM to manage content
  let content: any;
  content = await files.getFileContent({
    projectId,
    region,
    resource,
  });

  // Return Content (conditional response)
  if (!content) {
    return NextResponse.json({
      message: "Content not found",
      status: 404,
    });
  }
  return NextResponse.json({
    content,
    status: 200,
    message: "Successfully retrieved content",
  });
}
