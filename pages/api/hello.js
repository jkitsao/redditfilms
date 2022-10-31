// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api.jsx
import satori from 'satori'
import fetch from "node-fetch";
// async function getFont() {
//   const response = await fetch('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap')
//   return response.arrayBuffer()
// }
async function getSvg() {
  const response = await fetch('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap')
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  // console.log(data)
  const svg = await satori(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '-.02em',
        fontWeight: 700,
        background: 'white',
        // fontFamily: 'Inter'
      }}
    >
      <div
        style={{
          left: 42,
          top: 42,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            background: 'red',
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
          }}
        >
          redditflix.xyz
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px 50px',
          margin: '0 42px',
          fontSize: 40,
          width: 'auto',
          maxWidth: 550,
          textAlign: 'center',
          backgroundColor: 'black',
          // color: 'white',
          lineHeight: 1.4,
          color: 'red'
        }}
      >
        Get Movie and Tv shows recomendation from Reddit
      </div>
    </div>,
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: 'Roboto',
          // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
          data: buffer,
          weight: 500,
          style: 'normal',
        },
      ],
    },
  )
  return svg
}
export default async function helloAPI(req, res) {
  let image = await getSvg()
  res.status(200).send(image)
}
