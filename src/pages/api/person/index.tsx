import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// GET /api/person
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const { searchString } = req.query;
  const result = await prisma.person.findMany();
  const cleaned = JSON.parse(
    JSON.stringify(result, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
  return res.json(cleaned);
}
