import { technologyModel } from "@/models/technologyModel";

export type TechnologyRepositoryType = {
    findByTechnologyName(name: string): Promise<technologyModel>;
};
