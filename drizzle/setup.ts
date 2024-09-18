import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Access to .env is denied outside of Nextjs lifecycle
// Load file manually
dotenv.config({ path: ".env" });

// Connect to the remote MySQL database
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 3306,
});

export const DB = drizzle(pool);
