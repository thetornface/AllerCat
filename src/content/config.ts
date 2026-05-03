import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    heroBadge: z.string().optional(),
    description: z.string(),
    productType: z.string().optional(),
    weight: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    priceNote: z.string().optional(),
    cta: z.object({
      label: z.string(),
      href: z.string().default('#order')
    }),
    secondaryCta: z
      .object({
        label: z.string(),
        href: z.string()
      })
      .optional(),
    heroBadges: z.array(z.string()).optional(),
    legalNotice: z.string().optional(),
    contact: z.object({
      telegram: z.string(),
      email: z.string().optional(),
      youtube: z.string().optional()
    }),
    seo: z
      .object({
        title: z.string(),
        description: z.string()
      })
      .optional()
  })
});

export const collections = { home };
