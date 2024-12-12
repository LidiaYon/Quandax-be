import { Request } from 'express';

  export interface AuthenticatedRequest extends Request {
    user_id?: string;
    role?: string;
  }