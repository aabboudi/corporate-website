import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

export const DB: any = drizzle(new Database('db.sqlite3'));
