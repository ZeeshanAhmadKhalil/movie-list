import Head from 'next/head';
import MainLayout from '~layouts/main-layout/MainLayout';
import Movie from '~screens/movie';

function MoviePage() {

    return (
        <>
            <Head  >
                <title>Movies | Movie List</title>
            </Head>
            <MainLayout title='List of movies'>
                <Movie />
            </MainLayout>
        </>
    )
}

export default MoviePage