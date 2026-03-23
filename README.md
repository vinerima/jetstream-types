# @vinerima/jetstream-types

Shared Zod schemas and TypeScript types for [Bluesky Jetstream](https://github.com/bluesky-social/jetstream) events.

## Installation

```bash
npm install @vinerima/jetstream-types
```

Requires `zod` v4 as a peer dependency.

## Usage

```typescript
import { jetstreamPostCreateSchema, jetstreamToPost } from "@vinerima/jetstream-types";

// Validate a raw Jetstream WebSocket message
const parsed = jetstreamPostCreateSchema.parse(rawMessage);

// Convert to a flat Post object
const post = jetstreamToPost(parsed);
```

## Exports

- `jetstreamPostCreateSchema` — Zod schema for `app.bsky.feed.post` create events
- `JetstreamPostCreate` — TypeScript type inferred from the schema
- `jetstreamToPost(msg)` — Converts a Jetstream event into a flat `Post` object
- `Post` — Interface with `uri`, `cid`, `authorDid`, `text`, `rootUri`, `rootCid`

## License

MIT
