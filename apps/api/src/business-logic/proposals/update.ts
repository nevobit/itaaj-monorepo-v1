import { Proposal, ProposalSchema } from "../../models/proposals";

export const updateProposal = async (uuid: string, data: Partial<Proposal>): Promise<any | null> => {
  const property = await ProposalSchema.findBy({uuid: uuid});

  if (!property) {
    return null;
  }

  Object.assign(property, data);

  await ProposalSchema.update(uuid, data);

  return property;
};
