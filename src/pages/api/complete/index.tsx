import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// GET /api/complete
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.person.findMany({
    include: {
      car: true,
      pet: true,
    },
  });
  const cleaned = JSON.parse(
    JSON.stringify(result, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
  return res.json(cleaned);
}
