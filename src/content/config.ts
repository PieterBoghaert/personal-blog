import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    slug: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
