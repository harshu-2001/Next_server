import { addProjects, getProjects } from "@/lib/Projectdata";
import { NextResponse } from "next/server";

export const GET = async(req: Request,res:Response) => {
    try {
        const project = getProjects();
        return NextResponse.json({project},{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: "Error",error},{
            status:500,
        })
    }
    
};

export const POST = async(req:Request,res:Response) => {
    const {id,title,link,desc} = await req.json();

    try {
        const project = {_id:id,Projects:title,Project_links:link,Project_description:desc};
        addProjects(project);
        return NextResponse.json({project},{
            status:200
        })

    } catch (error) {
        return NextResponse.json({message: "Error",error},{
            status:500,
        })
    }
}