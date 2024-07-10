import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import ResearchProposals from "@/lib/models/Publications/ResearchProposals";

export const GET = async () => {
  try {
    await connect();
    const researchProposals = await ResearchProposals.find();

    return NextResponse.json({
      msg: "Getting all Research Proposals",
      data: researchProposals,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Research Proposals",
      error: error,
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      title,
      authors,
      scheme,
      fileNumber,
      principalInvestigator,
      coInvestigators,
      duration,
      totalBudget,
      status,
    } = await req.json();

    // Ensure required fields are present
    if (!title || !authors || authors.length === 0) {
      return NextResponse.json({
        msg: "Title and Authors are required fields",
        status: 400,
      });
    }

    // Construct the research proposal object with only present fields
    const researchProposalData: any = { title, authors };
    if (scheme) researchProposalData.scheme = scheme;
    if (fileNumber) researchProposalData.fileNumber = fileNumber;
    if (principalInvestigator) researchProposalData.principalInvestigator = principalInvestigator;
    if (coInvestigators) researchProposalData.coInvestigators = coInvestigators;
    if (duration) researchProposalData.duration = duration;
    if (totalBudget) researchProposalData.totalBudget = totalBudget;
    if (status) researchProposalData.status = status;

    await connect();
    const researchProposal = await ResearchProposals.create(researchProposalData);

    return NextResponse.json({
      msg: "Research Proposal created successfully",
      data: researchProposal,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating Research Proposal",
      error: error,
      status: 500,
    });
  }
};
