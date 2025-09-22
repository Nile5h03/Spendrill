import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Budgets = pgTable('budgets', { // Ensure table name matches
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon'),
  createBy: varchar('createdBy').notNull(), // Ensure column names match your DB schema
});
