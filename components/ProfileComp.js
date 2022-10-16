import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { set } from "nprogress";
function ProfileComp({ author }) {
  const [user, setUser] = useState({});
  const profile_url = `https://www.reddit.com/user/${author}/about.json`;

  //fetch profile
  // async function getProfileData() {
  //   const response = await axios.get(profile_url)
  //   return response.data
  // }
  // const { data, error, isError, isLoading } = useQuery('profiles', getProfileData)
  // useEffect(() => {
  //   console.log({ profileData: data, error, isLoading })
  // }, [data])
  // useEffect(() => {
  //   (
  //     async function () {
  //       try {
  //         const response = await axios.get(profile_url)
  //         setUser(response.data.data)
  //       }
  //       catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   )()
  // }, []);
  return (
    <>
      {user && (
        <section className="flex h-full w-full items-center">
          <div>
            <img
              // src={user?.snoovatar_img}
              src='https://img.icons8.com/fluency/344/reddit.png'
              alt=""
              className="w-10 h-10  shadow-xl bg-gray-50 p-1 object-cover"
              onError={(e) => {
                e.target.src = "https://img.icons8.com/fluency/344/reddit.png"; //  replacement image[user?.icon_img]
              }}
            />
          </div>
          <div className="mx-2 px-2 ">
            <span className="text-red-600 text-sm   markdown_div">
              u/{author}
            </span>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfileComp;
