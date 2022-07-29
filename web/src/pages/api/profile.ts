import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    res.json({ data: "profile" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
