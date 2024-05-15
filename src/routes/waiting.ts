import { Router } from "express";

export const waitingRouter = Router();

let status = "PENDING"
// let status = "NOT-WAITING"

// 대기 걸기
// /api/waiting
waitingRouter.post('/', (req, res) => {
  status = "WAITING"
  res.json({
    code: 'COM-000',
    message: 'ok',
    data: null
  })
})

// 대기 삭제
// /api/waiting/${waitingId}
waitingRouter.delete(`/:id`, (req, res) => {
  status = "NOT-WAITING"
  res.json({
    code: 'COM-000',
    message: 'ok',
    data: null
  })
})

// 대기 현황 조회 - WAITNG
// /api/waiting/${waitingId}
waitingRouter.get(`/:id`, (req, res) => {
  const id = req.params;
  console.log(id);

  if (status === "WAITING") {
    res.json({
      "code": "COM-000",
      "data": {
        "waitingStatus": "WAITING",
        "currentWaitingNumber": 1,
        "expectWaitingTime": 0,
        "headCount": 12
      }
    })
  }
  else if (status === "NOT-WAITING") {
    res.json({
      "code": "COM-000",
      "data": {
        "waitingStatus": "NOT-WAITING",
        "currentWaitingNumber": 10,
        "expectWaitingTime": 120
      }
    })
  } else if (status === "PENDING") {
    res.json({
      "code": "COM-000",
      "data": {
        "waitingStatus": "PENDING",
        "remainMinutes": 100,
        "waitingId": 1
      }
    })
  }
})


waitingRouter.get('/qr/:id', (req, res) => {
  res.json({
    imgUrl: ""
  })
})