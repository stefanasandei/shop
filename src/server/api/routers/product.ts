import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({ start: z.number().default(0), end: z.number().default(5) })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.product.findMany({
        skip: input.start,
        take: input.start + input.end,
      });
    }),
  getOne: publicProcedure
    .input(z.object({ id: z.string().default("") }))
    .query(async ({ input, ctx }) => {
      if (input.id == "") return undefined;

      return await ctx.prisma.product.findUnique({
        where: { id: input.id },
        include: { reviews: true },
      });
    }),
});
