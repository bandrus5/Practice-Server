import { IHTTPHandler } from "./IHTTPHandler";
import { CommandType } from "../util/CommandType";
import { Request, Response } from "express";
import { StringProcessor } from "./StringProcessor";
import { Serializer } from "./Serializer";
import { CommandData } from "../util/CommandData";

export class ExecCommandHandler implements IHTTPHandler {
  handle(req: Request, res: Response) {
    const data = JSON.parse(req.headers['data']) as CommandData;
    const type = data.type;
    const input = data.data;

    if (type == CommandType.ParseDouble) {
      this.stringProcessor.parseDouble(input).then(result => {
        let formattedResult = this.serializer.serializeResults(!Number.isNaN(result), result.toString());
        res.status(200).send({
          result: formattedResult
        });
      });
    }
    else if (type == CommandType.ToLower) {
      this.stringProcessor.toLowerCase(input).then(result => {
        let formattedResult = this.serializer.serializeResults(true, result);
        res.status(200).send({
          result: formattedResult
        });
      });
    }
    else if (type == CommandType.Trim) {
      this.stringProcessor.trim(input).then(result => {
        let formattedResult = this.serializer.serializeResults(true, result);
        res.status(200).send({
          result: formattedResult
        });
      });
    }
    else {
      res.send(400);
    }
  }
  private serializer = Serializer.getInstance();
  private stringProcessor = StringProcessor.getInstance();
}
