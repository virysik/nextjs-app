'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [pageId, setPageId] = useState('');
  useEffect(() => {
    params
      .then((p) => {
        setPageId(p.id);
      })
      .catch(console.error);
  }, [params]);

  return pageId ? <InsideComponent id={pageId} /> : null;
}

function InsideComponent({ id }: { id: string }) {
  useEffect(() => {
    const parsed = Number.parseInt(id);
    if (Number.isNaN(parsed)) {
      notFound();
    }
  }, [id]);
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
