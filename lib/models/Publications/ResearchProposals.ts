import { model, models, Schema } from 'mongoose';

const ResearchProposalsSchema = new Schema(
    {
        title: { type: String, required: true },
        authors: { type: [String], required: true },
        scheme: { type: String },
        fileNumber: { type: String },
        principalInvestigator: { type: String },
        coInvestigators: { type: [String] },
        duration: { type: String },
        totalBudget: { type: String },
        status: { type: String },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    }
);

const ResearchProposals = models.ResearchProposals || model('ResearchProposals', ResearchProposalsSchema);

export default ResearchProposals;
