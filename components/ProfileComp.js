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
              src='/assets/reddit-icon.png'
              alt=""
              className="w-8 rounded-full border h-8  shadow-2xl bg-gray-800 p-1 object-cover"
              onError={(e) => {
                e.target.src = "/assets/reddit-icon.png"; //  replacement image[user?.icon_img]
              }}
            />
          </div>
          <div className="mx-2 px-2 ">
            <span className="text-red-800 font-semibold text-sm markdown_div">
              u/{author}
            </span>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfileComp;
