declare global {
    namespace Express {
      interface Request {
        user_id?: string;
        role?: string;
      }
    }
  }
  
  export {};