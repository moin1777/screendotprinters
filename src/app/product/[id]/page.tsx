'use client';

import React from 'react';
import { ProductDetailPage } from '@/components/ProductDetailPage';
import { getProductDetails } from '@/data/productDetails';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params);
  const product = getProductDetails(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}