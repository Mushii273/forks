import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

export const hello = asyncHandler(async (req: Request, res: Response) => {
  try {
    res.status(200).send('Hello from NEPT template');
  } catch (error) {
    throw error;
  }
});
