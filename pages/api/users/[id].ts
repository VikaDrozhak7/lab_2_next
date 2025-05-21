import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === "GET") {
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        return res.json(user);
    }
    if (req.method === "PUT") {
        const { name, email } = req.body;
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });
        return res.json(user);
    }
    if (req.method === "DELETE") {
        await prisma.user.delete({ where: { id: Number(id) } });
        return res.status(204).end();
    }
    res.status(405).end();
}
