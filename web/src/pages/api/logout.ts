// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("SET-COOKIE", "idToken=deleted; path=/");
  res.status(200).json({ data: "signed out" });
}
