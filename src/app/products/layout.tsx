import React from 'react';

// This layout is much simpler. It just passes children through.
// Updated to handle Promise-based params in Next.js 15
export default function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return <>{children}</>;
}
