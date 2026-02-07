import { defineCollection, z } from "astro:content";

const authors = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        bio: z.string(),
        avatar: z.string(),
        social: z.object({
            twitter: z.string().optional(),
            github: z.string().optional(),
            website: z.string().optional(),
        }),
    }),
});

const series = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.array(z.string()),
    }),
});

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        series: z.string().optional(),
        tags: z.array(z.string()),
        publishedAt: z.date(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    posts,
    authors,
    series,
};
