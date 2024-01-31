import Head from 'next/head';
import MainLayout from '~layouts/main-layout/MainLayout';
import { Details } from '~screens/movie';

function DetailsPage() {
  return (
    <>
      <Head>
        <title>Movies | Movie List</title>
      </Head>
      <MainLayout title="Movie details">
        <Details />
      </MainLayout>
    </>
  );
}

export default DetailsPage;
