"use client";

import { useSearchParams } from "next/navigation";
import { Product } from "@/src/features/products/type/product.type";
import ProductCaart from "@/src/features/products/component/ProductCaart";
import EmptySearchState from "./EmptyProducts";

export default function ProductsList({
    products
}: {
    products?: Product[];
}) {
    const searchParams = useSearchParams();
    const query = (searchParams.get("search") ?? "").trim().toLowerCase();

    const safeProducts = Array.isArray(products) ? products : [];
    const filteredProducts = query
        ? safeProducts.filter((item) =>
            item.title?.toLowerCase().includes(query),
        )
        : safeProducts;

    if (filteredProducts.length === 0) {
        return <EmptySearchState />
    }

    return <>
        <section className="py-12 bg-white">
            <div className="max-w-11/12 md:max-w-9/12 mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-8 bg-linear-to-b from-green-500 to-green-900 rounded-full mr-1"></span>
                        Shop By <span className="text-green-600">Products</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredProducts.map((product) => <ProductCaart key={product._id} info={product} />)}
                </div>
            </div>
        </section>
    </>
}