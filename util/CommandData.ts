import { CommandType } from "./CommandType";

export class CommandData {
  constructor(type: CommandType, data: string) {
    this.type = type;
    this.data = data;
  }
  public type: CommandType;
  public data: string;
}
