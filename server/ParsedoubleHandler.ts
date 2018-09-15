import { HandlerBase } from './HandlerBase';
import { Request, Response } from 'express';

export class ParseDoubleHandler extends HandlerBase {
  handle(req: Request, res: Response) {
    let input = req.headers['input'] as string;
    this.stringProcessor.parseDouble(input).then(result => {
      let formattedResult = this.serializer.serializeResults(!Number.isNaN(result), result.toString());
      res.status(200).send({
        result: formattedResult
      });
    });
  }
}
