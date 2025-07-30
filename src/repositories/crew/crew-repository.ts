import data from '@/assets/data.json';
import { CrewRepositoryType } from './types';
import { crewModel } from '@/models/crewModel';
import { slugify } from '@/utils/slugify';

export class CrewRepository implements CrewRepositoryType {
    async findByCrewName(name: string): Promise<crewModel> {
        const result = data.crew.find(
            crew => slugify(crew.name) === slugify(name),
        );

        if (!result) {
            throw new Error(`Equipe '${name}' não encontrado.`);
        }

        return result;
    }
}
