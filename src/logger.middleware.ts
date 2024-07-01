// Modules and decorators import
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// LoggerMiddleware definition to log incoming requests
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Log the timestamp, HTTP method, and URL of the incoming request
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
  }
}