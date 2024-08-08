import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Articles = sqliteTable("Articles", {
    id: integer("ID").primaryKey(),
    title: text("Title"),
    category: text("Category"),
});
