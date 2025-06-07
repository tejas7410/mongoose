import express from 'express';
import mongoose from 'mongoose';

import { User } from './models/user.model.js';
import { Todo } from './models/todo.model.js';
import { SubTodo } from './models/subtodo.model.js';
import { connectDB } from './config/db.js';

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});