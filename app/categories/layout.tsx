import { MenuWithSearch } from '@/src/layouts/MenuWithSearch';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MenuWithSearch>{children}</MenuWithSearch>;
}
