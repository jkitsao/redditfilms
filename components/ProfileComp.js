import React, { useEffect, useState } from "react";
import axios from "axios";
function ProfileComp({ author }) {
  const [user, setUser] = useState({});
  const profile_url = `https://www.reddit.com/user/${author}/about.json`;
  useEffect(() => {
    axios
      .get(profile_url)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
        //   setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        //   setIsLoading(false);
      });
  }, []);
  return (
    <>
      {user && (
        <section className="flex h-full items-center">
          <div>
            <img
              src={user?.snoovatar_img}
              alt=""
              className="w-8 h-8 rounded-full  object-cover"
              onError={(e) => {
                e.target.src = user?.icon_img || ""; //  replacement image[user?.icon_img]
              }}
            />
          </div>
          <div className="mx-2 px-2 bg-gray-900">
            <span className="text-red-400 text-xs  shadow-lg font-bold font-mono">
              u/{author}
            </span>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfileComp;
