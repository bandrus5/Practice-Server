import { Results } from '../util/Results';

export class Serializer {
  private constructor() {}
  private static _instance: Serializer = null;
  public static getInstance() {
    if (Serializer._instance == null) {
      Serializer._instance = new Serializer();
    }
    return Serializer._instance;
  }

  public serializeResults(success: boolean, newString: string): Results {
    if (success) {
      return new Results(false, "None", "The requested operation could not be performed.")
    }
    else {
      return new Results(true, newString, "None");
    }
  }
}
