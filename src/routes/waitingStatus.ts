import { Router } from "express";

export const waitingStatusRouter = Router();

// 대기 걸기
waitingStatusRouter.get('/:id', (req, res) => {
  res.json({
    code: 'COM-000',
    message: 'ok',
    data: {

    }
  })
});