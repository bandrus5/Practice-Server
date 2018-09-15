import { HandlerBase } from './HandlerBase';
import { Request, Response } from 'express';

export class TrimHandler extends HandlerBase {
  handle(req: Request, res: Response) {
    let input = req.headers['input'] as string;
    let result = this.stringProcessor.trim(input);
    let formattedResult = this.serializer.serializeResults(true, result);
    res.status(200).send({
      result: formattedResult
    });
  }
}
