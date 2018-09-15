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

  async toLowerCase(s: string): Promise<string> {
    return s.toLowerCase();
  }

  async trim(s: string): Promise<string> {
    return s.trim();
  }

  async parseDouble(s: string): Promise<number> {
    return Number(s);
  }
}
