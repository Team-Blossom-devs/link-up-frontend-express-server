import { Router } from "express";

export const signInRouter = Router();

signInRouter.post('/manager', (req, res) => {
  res.json({
    message: 'ok',
  })
})