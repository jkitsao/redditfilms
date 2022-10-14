import Page from "../layouts/Page";
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
async function getPosts() {
  const subreddit = "movies";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=200`
  );
  const data = await res.json();
  return data
}

export default function Movies(props) {
  const { data } = useQuery(['forums'], getPosts, { initialData: props.data })
  return <Page data={data} title="r/movies | forum" />;
}

//fetch reddit data from r/moviesuggestions && r/movies
export async function getServerSideProps() {
  // Fetch data from external API
  // const data = await getPosts()
  // Pass data to the page via props
  // return { props: { data } };
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['forums'], getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
