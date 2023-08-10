/* eslint-disable @next/next/no-img-element */
import { type Product } from "@prisma/client";
import { Button } from "./button";

export function Card({ product }: { product: Product }) {
  return (
    <div className="space-y-3 rounded-md bg-primary/10 p-3 transition-colors hover:bg-primary/20 md:w-[20vw]">
      <h1 className="md:text-2xl">{product.title}</h1>
      <img
        src={product.images}
        alt={product.title}
        className="mx-auto rounded-md md:max-h-72"
      />
      <div className="flex  flex-row items-center justify-between">
        <p className="md:text-lg">{product.price} USD</p>
        <Button>Buy</Button>
      </div>
    </div>
  );
}
