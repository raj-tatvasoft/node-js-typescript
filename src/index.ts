import express, { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
