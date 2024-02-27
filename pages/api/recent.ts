import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsForHome, getRecentPostsForNativeApp } from '../../lib/api';

export default async function recent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getRecentPostsForNativeApp(null);
  if (!posts) {
    return res.status(401).json({ message: 'Posts not found' });
  }

  res.status(200).json(posts);
  res.end();
}
