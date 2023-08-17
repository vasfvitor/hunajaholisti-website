import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { useState } from "react";
import Spinner from "../components/Spinner";

import { Product, productsData } from "src/productsData";
import { ProductAddToCart, ProductMessageUs, ProductSoon } from "src/components/ProductCard";

const productByName: Record<string, Product> = {};

productsData.forEach(product => {
    productByName[product.indexName] = product;
});


export default function Products() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const [isLoading, setIsLoading] = useState(true);

    const productsByIdx: { [idx: number]: Product } = {};
    //
    productsData.forEach((product, idx) => {
        productsByIdx[idx] = product;
    });

    return (
        <>
            <div className="py-5"></div>
            <div className="container mx-auto text-center mt-20">
                <h3 className="text-4xl font-semibold text-white">
                    {language === "fi" ? "TUOTTEEMME" : "PRODUCTS"}
                </h3>
            </div>
            <div className="container mx-auto my-8">
                <hr />
            </div>
            <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-4">
                {/* Hunaja */}
                <ProductMessageUs
                    product={productByName["Honey350"]}
                    lang={language}
                />

                {/* Iso kummipesä */}
                <ProductAddToCart
                    product={productByName["BigHive"]}
                    lang={language}
                />

                {/* Pieni kummipesä */}
                <ProductAddToCart
                    product={productByName["SmallHive"]}
                    lang={language}
                />

                {/* Siitepöly */}
                <ProductSoon
                    product={productByName["Pollen250"]}
                    lang={language}>
                    <>
                        <h6 className="font-bold mt-1 text-[1.3rem] text-white">
                            35,00 €
                        </h6>
                        <p className="mt-4 text-white">
                            {language === "fi"
                                ? "Sis. ALV 24,00%"
                                : "VAT 24.00% included"}
                        </p>
                    </>
                </ProductSoon>

                {/* Propolis */}
                <ProductSoon
                    product={productByName["Propolis"]}
                    lang={language}>
                    <>
                        <p className="text-gray-300 smaller-text font-semibold">
                            {language === "fi"
                                ? "Myyn propolista lastuina"
                                : "I sell propolis as chips"}
                        </p>
                    </>
                </ProductSoon>
            </div >
        </>
    );
}

