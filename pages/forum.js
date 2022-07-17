import Page from "../layouts/Page";

export default function Movies({ data }) {
  return <Page data={data} title="r/movies | forum" />;
}

//fetch reddit data from r/moviesuggestions && r/movies
export async function getServerSideProps() {
  // Fetch data from external API
  const subreddit = "movies";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=400`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
