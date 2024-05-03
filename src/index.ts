import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

// test api
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'hello world' });
});

// bodyparser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());




app.listen(PORT, () => {
  console.log(`Server is running via ${PORT} PORT`);
});