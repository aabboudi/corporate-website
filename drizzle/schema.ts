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
  title: varchar("Title", { length: 255 }),
  slug: varchar("Slug", { length: 255 }),
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
  title: varchar("Title", { length: 255 }),
  location: varchar("Location", { length: 255 }),
  type: mysqlEnum("Type", [
    "Full-time",
    "Part-time",
    "Remote",
    "Contract",
    "Internship",
  ]),
  timezone: mysqlEnum("Timezone", ["UTC"]),
  published: date("Published On").default(new Date()).notNull(),
  description: text("Description"),
  clearance_required: boolean("Clearance Required"),
  is_urgent: boolean("Is Urgent"),
});

export const FAQs = mysqlTable("FAQs", {
  id: serial("ID").primaryKey(),
  question: varchar("Question", { length: 255 }),
  answer: text("Answer"),
  keywords: json("Keywords"),
});
