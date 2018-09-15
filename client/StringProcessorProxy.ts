import {IStringProcessor} from '../util/IStringProcessor';
import {ClientCommunicator} from './ClientCommunicator';
import { Results } from '../util/Results';

export class StringProcessorProxy implements IStringProcessor {
  public static getInstance() {
    if (StringProcessorProxy._instance == null) {
      StringProcessorProxy._instance = new StringProcessorProxy();
    }
    return StringProcessorProxy._instance;
  }
  private constructor() {
    this.communicator = ClientCommunicator.getInstance();
  };
  private static _instance: StringProcessorProxy = null;

  private communicator: ClientCommunicator;
  async toLowerCase(s: string): Promise<string> {
    let results: Results = await this.communicator.send(s, 'tolowercase');
    if (results.success) {
      return results.changedString;
    }
    else {
      return results.errorInfo;
    }
  }
  async trim(s: string): Promise<string> {
    let results: Results = await this.communicator.send(s, 'trim') as Results;
    if (results.success) {
      return results.changedString;
    }
    else {
      return results.errorInfo;
    }
  }
  async parseDouble(s: string): Promise<number|string> {
    let results: Results = await this.communicator.send(s, 'parseDouble');
    if (results.success) {
      return Number(results.changedString);
    }
    else {
      return results.errorInfo;
    }
  }
}
