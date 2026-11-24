
import ProductsList from "@/src/features/home/components/Products";
import { getProducts } from "@/src/features/products/server/product.action";

export default async function Products() {
  const response = await getProducts();
  const products = response?.data ?? [];
  return <ProductsList products={products} />;
}
