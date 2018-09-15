import { HandlerBase } from './HandlerBase';
import { Request, Response } from 'express';

export class ParseDoubleHandler extends HandlerBase {
  handle(req: Request, res: Response) {
    let input = req.headers['input'] as string;
    let result = this.stringProcessor.parseDouble(input);
    let formattedResult = this.serializer.serializeResults(result == NaN, result.toString());
    res.status(200).send({
      result: formattedResult
    });
  }
}
