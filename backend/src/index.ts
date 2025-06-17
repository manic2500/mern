import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // optional: if you use cookies/auth headers
}));
import { User } from '../../types/index';

const exampleUser: User = {
    id: '123',
    name: 'John Doe',
    email: 'john1@example.com'
};


app.get('/', (_req, res) => {
    console.log(exampleUser.name);
    res.send(`Backend running! - ${exampleUser.email}`);
});
app.get('/api/user', (_req, res) => {
    res.json(exampleUser);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
