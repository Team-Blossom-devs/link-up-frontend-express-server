import { Router } from "express";

export const managerRouter = Router();

// 관리자 로그인
// /api/manager/sign-in
managerRouter.post('/sign-in', (req, res) => {
  res.json({

  })
});

// 관리자 입장중(PENDING) => 대기중(WAITING) 변경
// /api/manager/restoration/${바꾸려는 waiting ID}
managerRouter.patch('/restoration/:id', (req, res) => {
  res.json({
    code: 'COM- 000',
    'data': {
      id: 1,
      name: 'test2',
      headCount: 3,
      phoneNumber: '010-0000-0000',
      entranceStatus: 'WAITING'
    }
  })
});

// 관리자 대기중(WAITING) => 입장중(PENDING) 변경
// /api/manager/entrance/${바꾸려는 waiting ID}
managerRouter.patch('/entrance/:id', (req, res) => {
  res.json({
    code: 'COM- 000',
    'data': {
      id: 1,
      name: 'test2',
      headCount: 3,
      phoneNumber: '010-0000-0000',
      entranceStatus: 'PENDING'
    }
  })
});


// 이용자 리스트 조회
// /api/manager/waitings?size=~~~ : 최초 요청
// /api/manager/waitings?size=~~&cursorId=~~ :두 번째 이후 요청
managerRouter.get('/waitings', (req, res) => {
  const params = req.query;
  console.log(params.size);
})