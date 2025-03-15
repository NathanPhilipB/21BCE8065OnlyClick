import { Request, Response } from 'express';
import Task, { ITask } from '../models/task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const userId = req.userId;

  try {
    const task: ITask = new Task({ title, description, userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};