import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import ResearchOutcomes from "@/lib/models/Publications/ResearchOutcomes";

export const GET = async () => {
  try {
    await connect();
    const researchOutcomes = await ResearchOutcomes.find();

    return NextResponse.json({
      msg: "Getting all Research Outcomes",
      data: researchOutcomes,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Research Outcomes",
      error: error,
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      initiative,
      initiators,
      activities,
    } = await req.json();

    // Ensure required fields are present
    if (!initiative || !initiators || initiators.length === 0 || !activities || activities.length === 0) {
      return NextResponse.json({
        msg: "Initiative, Initiators, and Activities are required fields",
        status: 400,
      });
    }

    await connect();
    const researchOutcome = await ResearchOutcomes.create({
      initiative,
      initiators,
      activities,
    });

    return NextResponse.json({
      msg: "Research Outcome created successfully",
      data: researchOutcome,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating Research Outcome",
      error: error,
      status: 500,
    });
  }
};