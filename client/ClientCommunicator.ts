import {Results} from '../util/Results'
import axios from 'axios'
import { CommandData } from '../util/CommandData';

const host = 'localhost';
const port = '4041';

export class ClientCommunicator {
  public static getInstance() {
    if (ClientCommunicator._instance == null) {
      ClientCommunicator._instance = new ClientCommunicator();
    }
    return ClientCommunicator._instance;
  }
  private constructor() {};
  private static _instance: ClientCommunicator = null;

  public send(phrase: string, requestType: string): Promise<Results> {
    return axios.get('http://'+host+':'+port+'/'+requestType, { headers: { input: phrase } }).then( response => {
      return response.data.result as Results;
    }).catch((error) => {return new Results(false, '', 'A server error occured')});
  }

  public sendCommand(commandData: CommandData): Promise<Results> {
    return axios.get('http://'+host+':'+port+'/command', { headers: {data: JSON.stringify(commandData)} }).then( response => {
      return response.data.result as Results;
    }).catch((error) => {return new Results(false, '', 'A server error occured')});
  }
}
