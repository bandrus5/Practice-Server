import {IStringProcessor} from '../util/IStringProcessor';
import {ClientCommunicator} from './ClientCommunicator';
import { Results } from '../util/Results';
import { CommandData } from '../util/CommandData';
import { CommandType } from '../util/CommandType';

export class StringProcessorProxyCommand implements IStringProcessor {
  public static getInstance() {
    if (StringProcessorProxyCommand._instance == null) {
      StringProcessorProxyCommand._instance = new StringProcessorProxyCommand();
    }
    return StringProcessorProxyCommand._instance;
  }
  private constructor() {
    this.communicator = ClientCommunicator.getInstance();
  };
  private static _instance: StringProcessorProxyCommand = null;

  private communicator: ClientCommunicator;
  async toLowerCase(s: string): Promise<string> {
    let data = new CommandData(CommandType.ToLower, s)
    let results: Results = await this.communicator.sendCommand(data);
    if (results.success) {
      return results.changedString;
    }
    else {
      return results.errorInfo;
    }
  }
  async trim(s: string): Promise<string> {
    let data = new CommandData(CommandType.Trim, s);
    let results: Results = await this.communicator.sendCommand(data) as Results;
    if (results.success) {
      return results.changedString;
    }
    else {
      return results.errorInfo;
    }
  }
  async parseDouble(s: string): Promise<number|string> {
    let data = new CommandData(CommandType.ParseDouble, s);
    let results: Results = await this.communicator.sendCommand(data);
    if (results.success) {
      return Number(results.changedString);
    }
    else {
      return results.errorInfo;
    }
  }
}
