import { serial, text, pgTable, pgSchema, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formdata:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
})