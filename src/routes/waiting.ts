import { Router } from "express";

export const waitingRouter = Router();

// 대기 걸기
// /api/waiting
waitingRouter.post('/', (req, res) => {
  res.json({
    code: 'COM-000',
    message: 'ok',
    data: null
  })
})

// 대기 삭제
// /api/waiting/${waitingId}
waitingRouter.delete(`/:id`, (req, res) => {
  res.json({
    code: 'COM-000',
    message: 'ok',
    data: null
  })
})

// 대기 현황 조회
// /api/waiting/${waitingId}
waitingRouter.get(`/:id`, (req, res) => {
  res.json({
    "code": "COM-000",
    "data": {
      "waitingStatus": "WAITING",
      "currentWaitingNumber": 1,
      "expectWaitingTime": 0,
      "headCount": 12
    }
  })
})

waitingRouter.get('/qr/:id', (req, res) => {
  res.json({
    imgUrl: ""
  })
})