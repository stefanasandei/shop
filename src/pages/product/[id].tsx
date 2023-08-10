/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/sections/layout";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { LoadingSection } from "@/components/ui/spinner";

export default function ProductPage() {
  const router = useRouter();

  const { isLoading, data: product } = api.product.getOne.useQuery({
    id: router.query.id?.toString(),
  });

  if (isLoading) return <LoadingSection />;

  return (
    <Layout>
      <div className="mx-auto min-h-screen max-w-[95vw]">
        <div className="grid justify-items-center gap-5 md:grid-cols-2 md:gap-0">
          <img
            src={product?.images}
            alt={product?.title}
            className="max-h-[75vh] rounded-md"
          />
          <div className="flex w-full flex-col space-y-6 md:justify-between">
            <div>
              <p className="mb-5 text-3xl">{product?.title}</p>
              <p>{product?.description}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg">{product?.price} USD</p>
              <Button className="relative w-full md:h-12">
                <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                  <ShoppingCart />
                </span>
                <p>Add to cart</p>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="mb-8">
          {product?.reviews.length == 0 && (
            <p className="text-center">There are no reviews yet.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
