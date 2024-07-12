import { defineDb, defineTable, column } from "astro:db";

const Like = defineTable({
  columns: {
    id: column.text({ }),
  },
});

export default defineDb({
  tables: { Like },
});
