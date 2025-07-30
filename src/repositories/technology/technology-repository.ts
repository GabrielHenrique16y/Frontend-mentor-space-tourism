import data from '@/assets/data.json';
import { TechnologyRepositoryType } from './types';
import { slugify } from '@/utils/slugify';
import { technologyModel } from '@/models/technologyModel';

export class TechnologyRepository implements TechnologyRepositoryType {
    async findByTechnologyName(name: string): Promise<technologyModel> {
        const result = data.technology.find(
            technology => slugify(technology.name) === slugify(name),
        );

        if (!result) {
            throw new Error(`Tecnologia '${name}' não encontrado.`);
        }

        return result;
    }
}
