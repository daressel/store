import { AdminMenu } from '@/src/layouts/AdminMenu';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminMenu>{children}</AdminMenu>;
}
