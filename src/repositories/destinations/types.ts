import { destinationModel } from '@/models/destinationModel';

export type DestinationRepositoryType = {
    findBydestinationName(name: string): Promise<destinationModel>;
};
