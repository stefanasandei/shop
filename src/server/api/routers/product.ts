import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({ start: z.number().default(0), end: z.number().default(5) })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.product.findMany({
        skip: input.start,
        take: input.start + input.end,
      });
    }),
});
