import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { ToLowerCaseHandler } from "./ToLowerCaseHandler";
import { TrimHandler } from "./TrimHandler";
import { ParseDoubleHandler } from "./ParsedoubleHandler";
import { ExecCommandHandler } from "./ExecCommandHandler";

class HTTPServer {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello There!'
      })
    });

    router.get('/tolowercase', (req: Request, res: Response) => {
      let handler = new ToLowerCaseHandler();
      handler.handle(req, res);
    });

    router.get('/trim', (req: Request, res: Response) => {
      let handler = new TrimHandler();
      handler.handle(req, res);
    });

    router.get('/parsedouble', (req: Request, res: Response) => {
      let handler = new ParseDoubleHandler();
      handler.handle(req, res);
    });

    router.get('/command', (req: Request, res: Response) => {
      let handler = new ExecCommandHandler();
      handler.handle(req, res);
    });

    this.app.use('/', router);
  }
}

export default new HTTPServer().app;
