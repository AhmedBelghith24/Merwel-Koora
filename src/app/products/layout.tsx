import React from 'react';

// This layout is much simpler. It just passes children through.
// It correctly accepts 'params' which fixes the build error.
export default function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <>{children}</>;
}
