import { Request, Response } from "express";
import { AppDataSource } from "../../database";
import { Todo } from "../../database/entities/Todo";

const todoRepository = AppDataSource.getRepository(Todo);

// GET all todos
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoRepository.find({
      order: { createdAt: "DESC" },
    });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// POST create new todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Todo text is required" });
    }

    const todo = todoRepository.create({
      text: text.trim(),
      isCompleted: false,
    });

    const savedTodo = await todoRepository.save(todo);
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

// PATCH update todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text, isCompleted } = req.body;

    const todo = await todoRepository.findOne({ where: { id } });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    if (text !== undefined) todo.text = text;
    if (isCompleted !== undefined) todo.isCompleted = isCompleted;

    const updatedTodo = await todoRepository.save(todo);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

// DELETE todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todo = await todoRepository.findOne({ where: { id } });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    await todoRepository.remove(todo);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
