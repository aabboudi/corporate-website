import {
  mysqlTable,
  serial,
  varchar,
  date,
  tinyint,
  text,
  mysqlEnum,
  boolean,
  json,
} from "drizzle-orm/mysql-core";

export const Articles = mysqlTable("Articles", {
  id: serial("ID").primaryKey(),
  title: varchar("Title", { length: 255 }).notNull(),
  slug: varchar("Slug", { length: 255 }).notNull(),
  image: varchar("Image URL", { length: 255 }),
  alt_text: varchar("Credits", { length: 255 }),
  category: varchar("Category", { length: 255 }),
  location: varchar("Location", { length: 255 }),
  published: date("Published On").default(new Date()).notNull(),
  content: json("Content"),
  read_time: tinyint("Read Time (min)"),
});

export const Openings = mysqlTable("Openings", {
  id: serial("ID").primaryKey(),
  title: varchar("Title", { length: 255 }).notNull(),
  location: varchar("Location", { length: 255 }),
  type: mysqlEnum("Type", [
    "Full-time",
    "Part-time",
    "Remote",
    "Contract",
    "Internship",
  ]).notNull(),
  timezone: mysqlEnum("Timezone", ["UTC", "EST", "PST"]),
  published: date("Published On").default(new Date()).notNull(),
  description: text("Description"),
  clearance_required: boolean("Clearance Required").default(false).notNull(),
  is_urgent: boolean("Is Urgent").default(false).notNull(),
});

export const FAQs = mysqlTable("FAQs", {
  id: serial("ID").primaryKey(),
  question: varchar("Question", { length: 255 }).notNull(),
  answer: text("Answer").notNull(),
  keywords: json("Keywords"),
});
