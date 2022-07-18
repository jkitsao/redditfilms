import Page from "../layouts/Page";

export default function Home({ data }) {
  return (

    <Page data={data} title="movies | r/MovieSuggestions" />

  );
}

//fetch reddit data from r/moviesuggestions && r/movies
export async function getServerSideProps() {
  // Fetch data from external API
  const subreddit = "MovieSuggestions";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=100`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
