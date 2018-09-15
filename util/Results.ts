export class Results {
  constructor(success: boolean, changedString: string, errorInfo: string) {
    this.success = success;
    this.changedString = changedString;
    this.errorInfo = errorInfo;
  }
  private success: boolean;
  private changedString: string;
  private errorInfo: string;

  public getSuccess(): boolean {
    return this.success;
  }
  public getChangedString(): string {
    return this.changedString;
  }
  public getErrorInfo(): string {
    return this.errorInfo;
  }
}
