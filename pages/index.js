import Page from "../layouts/Page";

export default function Home({ data }) {
  return (
    <div className="page_layout">
      <Page data={data} title="movies | r/MovieSuggestions" />
    </div>
  );
}

//fetch reddit data from r/moviesuggestions && r/movies
export async function getServerSideProps() {
  // Fetch data from external API
  const subreddit = "MovieSuggestions";
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?limit=400`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
