import Layout from "@/components/sections/layout";
import { Card } from "@/components/ui/card";
import { api } from "@/utils/api";

export default function HomePage() {
  const { isLoading, data: products } = api.product.getAll.useQuery({});

  if (isLoading) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className="mx-3 grid grid-flow-row grid-cols-2 justify-items-stretch 
                      gap-x-3 gap-y-10 sm:grid-cols-4 sm:justify-items-center
                      md:mx-auto md:max-w-[95vw] md:gap-x-0"
      >
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
