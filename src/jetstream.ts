import { z } from "zod";

const uriCidSchema = z.object({
  uri: z.string(),
  cid: z.string(),
});

const postRecordSchema = z.object({
  $type: z.literal("app.bsky.feed.post"),
  text: z.string(),
  createdAt: z.string(),
  reply: z.object({
    root: uriCidSchema,
    parent: uriCidSchema,
  }).optional(),
  embed: z.unknown().optional(),
  langs: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
});

export const jetstreamPostCreateSchema = z.object({
  did: z.string(),
  time_us: z.number(),
  kind: z.literal("commit"),
  commit: z.object({
    rev: z.string(),
    operation: z.literal("create"),
    collection: z.literal("app.bsky.feed.post"),
    rkey: z.string(),
    record: postRecordSchema,
    cid: z.string(),
  }),
});

export type JetstreamPostCreate = z.infer<typeof jetstreamPostCreateSchema>;
