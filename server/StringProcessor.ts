import { IStringProcessor } from '../util/IStringProcessor';

export class StringProcessor implements IStringProcessor {
  public static getInstance() {
    if (StringProcessor._instance == null) {
      StringProcessor._instance = new StringProcessor();
    }
    return StringProcessor._instance;
  }

  private constructor() {};
  private static _instance: StringProcessor = null;

  toLowerCase(s: string): string {
    return s.toLowerCase();
  }
  
  trim(s: string): string {
    return s.trim();
  }

  parseDouble(s: string): number {
    return Number(s);
  }
}
