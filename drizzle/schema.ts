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
  decimal,
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

export const opening_enums = {
  departments: ["Engineering", "Sales", "Marketing", "Human Resources", "Support Services", "Other",] as const,
  options: ["Full-time", "Part-time", "Remote", "Contract", "Internship",] as const,
  timezones: ["UTC", "EST", "PST",] as const,
  currencies: ["USD", "EUR", "CAD", "GBP",] as const,
  salary_frq: ["day", "week", "month", "year", "project", "other",] as const,
};

export const Openings = mysqlTable("Openings", {
  id: serial("ID").primaryKey(),
  title: varchar("Title", { length: 255 }).notNull(),
  department: mysqlEnum("Department", opening_enums.departments).default("Other").notNull(),
  location: varchar("Location", { length: 255 }),
  option: mysqlEnum("Option", opening_enums.options).notNull(),
  timezone: mysqlEnum("Timezone", opening_enums.timezones).default("EST").notNull(),
  published: date("Published On").default(new Date()).notNull(),
  description: text("Description"),
  clearance_required: boolean("Clearance Required").default(false).notNull(),
  is_urgent: boolean("Is Urgent").default(false).notNull(),
  salary_min: decimal("Min Salary", { precision: 10, scale: 2 }).notNull(),
  salary_max: decimal("Max Salary", { precision: 10, scale: 2 }).notNull(),
  salary_cur: mysqlEnum("Salary Currency", opening_enums.currencies).notNull(),
  salary_frq: mysqlEnum("Salary Type", opening_enums.salary_frq).notNull(),
});

export const FAQs = mysqlTable("FAQs", {
  id: serial("ID").primaryKey(),
  question: varchar("Question", { length: 255 }).notNull(),
  answer: text("Answer").notNull(),
  keywords: json("Keywords"),
});
