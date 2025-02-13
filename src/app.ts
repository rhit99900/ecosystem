import 'reflect-metadata';
import express, { Response } from 'express';
import UserRoutes from './routes/users.route';
import { Routes } from './types/routes.types';
import { PORT } from './config/index.config';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import useragent from 'express-useragent';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = PORT;
    this.initMiddleWare();
    this.initRoute(routes);    
  }

  private initMiddleWare = () => {
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true}));
    this.app.use(cookieParser());
    this.app.use(useragent.express());

  }

  private initRoute = (routes: Routes[]) => {
    routes.forEach(route => {
      this.app.use(`/${route.path}`, route.router);
    })
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.info(`----- Ecosystem | Active | Port ${this.port}`);
    });    
  }
}


const app = new App([
  new UserRoutes()
]);

app.listen();