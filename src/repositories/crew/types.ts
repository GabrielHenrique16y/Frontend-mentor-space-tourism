import { crewModel } from "@/models/crewModel";

export type CrewRepositoryType = {
    findByCrewName(name: string): Promise<crewModel>;
};
