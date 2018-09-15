import { Request, Response } from "express";

export interface IHTTPHandler {
  handle(req: Request, res: Response);
}
