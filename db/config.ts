import { defineDb, defineTable, column } from "astro:db";

const Like = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, optional: false }),
  },
});

export default defineDb({
  tables: { Like },
});
