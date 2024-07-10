import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import ResearchOutcomes from "@/lib/models/Publications/ResearchOutcomes";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchOutcomeID } = params;
    await connect();

    const researchOutcome = await ResearchOutcomes.findById(ResearchOutcomeID);
    if (!researchOutcome) {
      return NextResponse.json({ msg: "Research outcome not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting research outcome", data: researchOutcome, status: 200 });
  } catch (error) {
    console.error("Error in fetching single research outcome", error);
    return NextResponse.json({ msg: "Error in fetching single research outcome", error, status: 500 });
  }
};


export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchOutcomeID } = params;
    await connect();
    
    const researchOutcome = await ResearchOutcomes.findById(ResearchOutcomeID);
    if (!researchOutcome) {
      return NextResponse.json({ msg: "Research outcome not found", status: 404 });
    }

    // Delete the research outcome from the database
    await ResearchOutcomes.findByIdAndDelete(ResearchOutcomeID);

    return NextResponse.json({ msg: "Research outcome deleted successfully", data: researchOutcome, status: 200 });
  } catch (error) {
    console.error("Error deleting research outcome:", error);
    return NextResponse.json({ msg: "Error deleting research outcome", error, status: 500 });
  }
};


export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchOutcomeID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedResearchOutcome = await ResearchOutcomes.findByIdAndUpdate(
      ResearchOutcomeID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedResearchOutcome) {
      return NextResponse.json({ msg: "Research outcome not found", status: 404 });
    }

    console.log('Updated research outcome:', updatedResearchOutcome);

    return NextResponse.json({
      msg: "Research outcome updated successfully",
      data: updatedResearchOutcome,
      status: 200
    });
  } catch (error) {
    console.error('Error updating research outcome:', error);
    return NextResponse.json({
      msg: "Error updating research outcome",
      error,
      status: 500
    });
  }
};