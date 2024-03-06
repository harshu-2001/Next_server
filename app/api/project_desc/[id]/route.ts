import { getById } from "@/lib/ProjectDescdata";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = Number(req.url.split("project_desc/")[1]);
    const project_desc = getById(id);
    if (!project_desc) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ project_desc }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
        { message: "Error",error },
        { status: 500 }
      );
  }
};
