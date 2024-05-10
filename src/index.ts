import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import { waitingRouter } from "./routes/waiting";
import { managerRouter } from "./routes/manager";
import { organRouter } from "./routes/organization";
// import { waitingStatusRouter } from "./routes/waitingStatus";

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
app.use('/api/manager', managerRouter);
app.use('/api/organization', organRouter);

app.listen(PORT, () => {
  console.log(`Server is running via ${PORT} PORT`);
});