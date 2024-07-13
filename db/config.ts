import { defineDb, defineTable, column } from "astro:db";

const Like = defineTable({
  columns: {
    id: column.text(),
  },
});

const Comment = defineTable({
  columns: {
    id: column.text(),
    comment: column.text({optional: false})
  },
});

export default defineDb({
  tables: { Like, Comment },
});
