export class Results {
  constructor(success: boolean, changedString: string, errorInfo: string) {
    this.success = success;
    this.changedString = changedString;
    this.errorInfo = errorInfo;
  }
  public success: boolean;
  public changedString: string;
  public errorInfo: string;
}
