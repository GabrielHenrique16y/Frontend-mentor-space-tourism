import { destinationModel } from '@/models/destinationModel';
import { DestinationRepositoryType } from './types';
import data from '@/assets/data.json';

export class DestinationRepository implements DestinationRepositoryType {
    async findBydestinationName(name: string): Promise<destinationModel> {
        const result = data.destinations.find(
            destination => destination.name.toLowerCase() === name.toLowerCase(),
        );

        if (!result) {
            throw new Error(`Destino '${name}' não encontrado.`);
        }

        return result;
    }
}
