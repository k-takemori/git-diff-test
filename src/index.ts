import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface User {
  id: number;
  name: string;
}

const usersList: User[] = [
  {
    id: 1,
    name: 'taro',
  },
  {
    id: 2,
    name: 'jiro',
  },
  {
    id: 3,
    name: 'saburo',
  },
  {
    id: 4,
    name: 'shiro',
  },
];

var hoge = 1;

const getUser = (id: number) => {
  return usersList.find((user) => user.id == id);
};

const apiGetUsers = (req: Request, res: Response) => {
  console.log(req.headers);
  res.json(usersList);
};

interface GetUserReqParam {
  userId: number;
}
interface GetUserReqBody {
  name: string;
}

const apiGetUser = (req: Request, res: Response) => {
  console.log(req.headers);
  const userId = Number(req.params['userId']);
  console.log(`userId: ${userId}`);
  const user = getUser(userId);
  if (!user) {
    res.status(400).json({ message: `UserID ${userId} NotFound` });
  }
  res.json(user);
};

const apiUpdateUser = (
  req: Request<GetUserReqParam, unknown, unknown, GetUserReqBody>,
  res: Response,
) => {
  console.log(req.headers);
  console.log(req.body);
  const userId = Number(req.params['userId']);
  const newName = (req.body as GetUserReqBody).name;

  for (const user of usersList) {
    if (user.id == userId) {
      user.name = newName;
      res.json(user);
      return;
    }
  }
  res.status(400).json({ message: `UserID ${userId} NotFound` });
};

const apiGetHealth = (req: Request, res: Response) => {
  console.log(req.headers);
  res.send('OK');
};

const healthRouter = express.Router();
const usersRouter = express.Router();

app.use('/health', healthRouter);
app.use('/users', usersRouter);

healthRouter.route('/').get(apiGetHealth);
usersRouter.route('/').get(apiGetUsers);
usersRouter.route('/:userId').get(apiGetUser);
usersRouter.route('/:userId').post(apiUpdateUser);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
