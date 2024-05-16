import { Router } from 'express';

export const signInRouter = Router();

signInRouter.post('/manager', (req, res) => {
  const { managerName, password } = req.body;
  res.json({
    message: 'ok',
    data: {
      managerName,
      password,
    },
  });
});
