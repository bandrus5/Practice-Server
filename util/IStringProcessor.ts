export interface IStringProcessor {
  toLowerCase(s: string): string;
  trim(s: string): string;
  parseDouble(s: string): number;
}
