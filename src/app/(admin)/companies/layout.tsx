import { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  toolbar: ReactNode;
  modal: ReactNode;
  children: ReactNode;
}
export default function Layout({
  header,
  toolbar,
  modal,
  children,
}: LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
