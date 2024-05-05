import { Router } from "express";

export const organRouter = Router();

// 주점 검색 리스트
// /api/organization?name='공학'
organRouter.get('/', (req, res) => {
  const name = req.query.name;
  console.log(name);
  res.json({

  })
})