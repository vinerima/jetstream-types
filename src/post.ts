import type { JetstreamPostCreate } from "./jetstream";

export interface Post {
  uri: string;
  cid: string;
  authorDid: string;
  text: string;
  rootUri: string;
  rootCid: string;
}

export function jetstreamToPost(msg: JetstreamPostCreate): Post {
  const { did, commit } = msg;
  const { record, rkey, cid } = commit;

  const uri = `at://${did}/app.bsky.feed.post/${rkey}`;

  return {
    uri,
    cid,
    authorDid: did,
    text: record.text,
    rootUri: record.reply?.root.uri ?? uri,
    rootCid: record.reply?.root.cid ?? cid,
  };
}
