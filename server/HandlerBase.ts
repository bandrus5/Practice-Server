import { IHTTPHandler } from './IHTTPHandler';
import { Serializer } from './Serializer';
import { StringProcessor } from './StringProcessor';
import { Request, Response } from 'express';

export abstract class HandlerBase implements IHTTPHandler {
  abstract handle(req: Request, res: Response);

  constructor() {
    this.serializer = Serializer.getInstance();
    this.stringProcessor = StringProcessor.getInstance();
  }
  protected serializer: Serializer;
  protected stringProcessor: StringProcessor;
}
