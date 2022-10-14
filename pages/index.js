import Page from "../layouts/Page";
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
async function getPosts() {
  const subreddit = "MovieSuggestions";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=200`
  );
  const data = await res.json();
  return data
}

export default function Home(props) {
  const { data } = useQuery(['movies'], getPosts, { initialData: props.data })
  return <Page data={data} title="movies | r/MovieSuggestions" />
}

//fetch reddit data from r/moviesuggestions && r/movies
export async function getServerSideProps() {
  // Fetch data from external API
  // const data = await getPosts()
  // Pass data to the page via props
  // return { props: { data } };
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['movies'], getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
