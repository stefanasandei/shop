import { type Product } from "@prisma/client";

export function Card({ product }: { product: Product }) {
  return <div>{product.title}</div>;
}
