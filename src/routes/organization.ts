import { Router } from 'express';

export const organRouter = Router();

// 주점 검색 리스트
// /api/organization?searchTerm='공학'&pageNum=1
organRouter.get('/', (req, res) => {
  const name = req.query.searchTerm;
  console.log(name);
  res.json({
    code: 'COM-000',
    data: {
      currentPageElementCount: 3,
      currentPage: 1,
      totalPages: 5,
      organizationDtoList: [
        {
          id: 1,
          name: '어쩌구 주점1',
          location: '덕문관',
          tableCount: 12,
        },
      ],
    },
  });
});

organRouter.get('/:id', (req, res) => {
  res.json({
    code: 'COM-000',
    data: {
      name: '컴퓨터공학과',
      introduce: '안녕하세요~~',
      location: '덕문관',
      tableCount: 12,
    },
  });
});
