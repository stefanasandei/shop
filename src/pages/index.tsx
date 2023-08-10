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
      <div className="grid grid-flow-row grid-cols-4 gap-5">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
