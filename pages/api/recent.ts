import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsForHome } from '../../lib/api';

export default async function recent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getAllPostsForHome(null);
  if (!posts) {
    return res.status(401).json({ message: 'Posts not found' });
  }

  res.status(200).json(posts);
  res.end();
}
