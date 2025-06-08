import express from 'express';
import mongoose from 'mongoose';

import { User } from './models/Todo/user.model.js';
import { Todo } from './models/Todo/todo.model.js';
import { SubTodo } from './models/Todo/subtodo.model.js';
import { connectDB } from './config/db.js';

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});