export interface IStringProcessor {
  toLowerCase(s: string): Promise<string>;
  trim(s: string): Promise<string>;
  parseDouble(s: string): Promise<number|string>;
}
