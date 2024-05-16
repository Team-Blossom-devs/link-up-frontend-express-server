import { Router } from 'express';

export const oauthRouter = Router();

oauthRouter.post('/sign-up', (req, res) => {
  const { userName, phoneNumber } = req.body;
  res.json({
    message: 'ok',
    data: {
      userName,
      phoneNumber,
    },
  });
});

oauthRouter.post('/sign-in/kakao', (req, res) => {
  const { code } = req.body;
  res.json({
    message: 'ok',
    data: {
      accessToken: code,
    },
  });
});
