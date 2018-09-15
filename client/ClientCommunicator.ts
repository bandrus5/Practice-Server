import {Results} from '../util/Results'
import axios from 'axios'

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
    return axios.get('http://localhost:4041/' + requestType, { headers: { input: phrase } }).then( response => {
      return response.data.result as Results;
    }).catch((error) => {return new Results(false, '', 'A server error occured')});
  }
}
