import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function Update(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { first_name } = req.body;
    const id = parseInt(req.query.id as string);
    if (first_name) {
      const result = await prisma.person.update({
        where: { id: id },
        data: {
          first_name: first_name,
        },
      });

      const cleaned = JSON.parse(
        JSON.stringify(result, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );

      return res.status(201).json(cleaned);
    } else {
      return res.status(400).send("Something went wrong...");
    }
  } else {
    return res
      .status(400)
      .send(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
