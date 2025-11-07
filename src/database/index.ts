import "reflect-metadata";
import { DataSource } from "typeorm";
import { Todo } from "./entities/Todo";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "todouser",
  password: process.env.DB_PASSWORD || "todopass",
  database: process.env.DB_NAME || "todos",
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV === "development",
  entities: [Todo],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
});
