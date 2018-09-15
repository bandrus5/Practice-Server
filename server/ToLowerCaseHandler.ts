import { HandlerBase } from './HandlerBase';
import { Request, Response } from 'express';

export class ToLowerCaseHandler extends HandlerBase {
  handle(req: Request, res: Response) {
    let input = req.headers['input'] as string;
    this.stringProcessor.toLowerCase(input).then(result => {
      let formattedResult = this.serializer.serializeResults(true, result);
      res.status(200).send({
        result: formattedResult
      });
    });
  }
}
