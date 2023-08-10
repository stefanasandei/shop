import Layout from "@/components/sections/layout";
import { api } from "@/utils/api";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  if (typeof router.query.id !== "string") {
    void router.push("/");
    return <p>error</p>;
  }

  const { isLoading, data: product } = api.product.getOne.useQuery({
    id: router.query.id,
  });

  if (isLoading)
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );

  return (
    <Layout>
      <p>{product?.title}</p>
    </Layout>
  );
}
