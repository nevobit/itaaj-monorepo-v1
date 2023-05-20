import { Proposal, ProposalSchema } from '../../models/proposals';

export const createProposal = async ( data: any ): Promise<Proposal | Error> => {
  const proposal = await ProposalSchema.insert({...data});
  return proposal.raw;
};