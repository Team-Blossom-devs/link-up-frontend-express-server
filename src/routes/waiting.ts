import { Router } from "express";

export const waitingRouter = Router();

// 대기 걸기
waitingRouter.post('/', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'ok',
    data: {

    }
  })
})

// 대기 삭제
waitingRouter.delete(`/:id}`, (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'ok',
    data: {
      "currentWaitingNumber": 1,
      "expactWaitingTime": 0,
      "headCount": 4
    }
  })
})