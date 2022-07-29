import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //
    const body = JSON.parse(req.body);
    res.setHeader("SET-COOKIE", [
      cookie.serialize("idToken", body.idToken, {
        path: "/",
        sameSite: "strict",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      }),
    ]);
    return res.json({ message: "Signed in" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
