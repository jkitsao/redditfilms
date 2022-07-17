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
        <section className="flex h-full w-full items-center">
          <div>
            <img
              src={user?.snoovatar_img}
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
