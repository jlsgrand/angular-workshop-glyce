import { Aliment } from './aliment.model';

export interface Portion {
  aliment: Aliment;
  portion: number;
}