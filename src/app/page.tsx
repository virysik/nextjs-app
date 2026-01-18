import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main className="m-4 flex flex-col gap-8">
      <h1 className="text-xl text-center">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
