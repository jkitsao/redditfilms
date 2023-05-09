import Page from "../layouts/Page";
import redis from "../lib/redis";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
async function getPosts() {
  const subreddit = "MovieSuggestions";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=400`
  );
  const data = await res.json();
  return data;
}
const queryClient = new QueryClient();

export default function Home(props) {
  // const { data, isLoading } = useQuery(['movies'], getPosts, { initialData: props.data })
  const { isLoading, error, data } = useQuery(["home-content"], getPosts);

  return (
    <Page
      data={data}
      isLoading={isLoading}
      title="movies | r/MovieSuggestions"
    />
  );
}

//fetch reddit data from r/moviesuggestions && r/movies
// export async function getServerSideProps() {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['movies'], getPosts)
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
