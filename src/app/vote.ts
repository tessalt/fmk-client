export class Vote {
  count: number;
  character_id: number;
  value: string;
  percentage: number;

  constructor(params) {
    this.count = params.count;
    this.character_id = params.character_id;
    this.value = params.value;
  }
}
