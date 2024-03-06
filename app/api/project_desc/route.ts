import { addProjectDesc, getProjectsDesc } from "@/lib/ProjectDescdata";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const project = getProjectsDesc();
    return NextResponse.json(
      { project },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { id, title, date, skill, desc, feature, tech, concl } =
    await req.json();

  try {
    const project_desc = {
      _id: id,
      Projects: title,
      Date: date,
      Skills: skill,
      Description: desc,
      Key_Feature: feature,
      Technology_used: tech,
      Conclusion: concl,
    };
    addProjectDesc(project_desc);
    return NextResponse.json(
      { project_desc },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
