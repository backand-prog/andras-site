'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GaListener() {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    const url = pathname + (search?.toString() ? `?${search}` : '');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-PVDSHD4FW3', { page_path: url });
    }
  }, [pathname, search]);
  return null;
}
