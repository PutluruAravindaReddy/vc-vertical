import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import ResearchProposals from "@/lib/models/Publications/ResearchProposals";

// GET handler for fetching a single research proposal by ID
export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchProposalID } = params;
    await connect();

    const researchProposal = await ResearchProposals.findById(ResearchProposalID);
    if (!researchProposal) {
      return NextResponse.json({ msg: "Research proposal not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting research proposal", data: researchProposal, status: 200 });
  } catch (error) {
    console.error("Error in fetching single research proposal", error);
    return NextResponse.json({ msg: "Error in fetching single research proposal", error, status: 500 });
  }
};

// DELETE handler for deleting a research proposal by ID
export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchProposalID } = params;
    await connect();
    
    const researchProposal = await ResearchProposals.findById(ResearchProposalID);
    if (!researchProposal) {
      return NextResponse.json({ msg: "Research proposal not found", status: 404 });
    }

    // Delete the research proposal from the database
    await ResearchProposals.findByIdAndDelete(ResearchProposalID);

    return NextResponse.json({ msg: "Research proposal deleted successfully", data: researchProposal, status: 200 });
  } catch (error) {
    console.error("Error deleting research proposal:", error);
    return NextResponse.json({ msg: "Error deleting research proposal", error, status: 500 });
  }
};

// PATCH handler for updating a research proposal by ID
export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { ResearchProposalID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedResearchProposal = await ResearchProposals.findByIdAndUpdate(
      ResearchProposalID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedResearchProposal) {
      return NextResponse.json({ msg: "Research proposal not found", status: 404 });
    }

    console.log('Updated research proposal:', updatedResearchProposal);

    return NextResponse.json({
      msg: "Research proposal updated successfully",
      data: updatedResearchProposal,
      status: 200
    });
  } catch (error) {
    console.error('Error updating research proposal:', error);
    return NextResponse.json({
      msg: "Error updating research proposal",
      error,
      status: 500
    });
  }
};
