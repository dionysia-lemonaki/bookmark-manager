import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const bookmarksTable = pgTable("bookmarks", {
  id: serial().primaryKey(),
  title: text().notNull(),
  url: text().notNull(),
  favicon: text().notNull(),
  description: text().notNull(),
  pinned: boolean().default(false).notNull(),
  isArchived: boolean().default(false).notNull(),
  visitCount: integer().default(0).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  lastVisited: timestamp(),
});
