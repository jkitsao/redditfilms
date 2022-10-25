import axios from 'axios'

export async function fetchComments(baseURl) {
    const res = await fetch(
        baseURl
    );
    const data = await res.json();
    return data
}

// useEffect(() => {
  //   (
  //     async function () {
  //       try {
  //         setIsLoading(true)
  //         const response = await axios.get(baseURl)
  //         if (response.data[1]) setComments(response.data[1]);
  //         setIsLoading(fale)
  //       }
  //       catch (error) {
  //         setIsLoading(false)
  //         console.error(error)
  //       }
  //     }
  //   )()
  // }, []);