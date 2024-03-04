// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const dsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    company: z.string(),
    // tags: z.array(z.string()),
    // image: z.string().optional(),
  }),
});

const specialistCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    company: z.string(),
    // tags: z.array(z.string()),
    // image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  designsystems: dsCollection,
  specialists: specialistCollection,
};
