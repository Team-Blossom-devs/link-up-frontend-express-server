import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import { waitingRouter } from "./routes/waiting";
import { waitingStatusRouter } from "./routes/waitingStatus";

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

app.use('/api/waiting', waitingRouter);
app.use('/api/waiting-status', waitingStatusRouter);


app.listen(PORT, () => {
  console.log(`Server is running via ${PORT} PORT`);
});