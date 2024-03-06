import { getById } from "@/lib/Projectdata";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = Number(req.url.split("projects/")[1]);
    const project = getById(id);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
        { message: "Error",error },
        { status: 500 }
      );
  }
};
