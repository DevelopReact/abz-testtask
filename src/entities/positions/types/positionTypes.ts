export interface IPosition {
  id?: number;
  name: string;
}

export interface IPositionsResponse {
  success: boolean;
  positions: IPosition[];
}
