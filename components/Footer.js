import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="sticky bottom-0 text-xs lg:text-sm flex justify-center items-center p-1 lg:p-1 w-full bg-black opacity-90 lg:opacity-50 lg:w-1/4 mx-auto lg:bg-gray-900  text-green-300">
      <span>
        created by
        <a href="www.twitter.com/j_kitsao" className="mx-1 text-yellow-400">
          kitsao{" "}
        </a>
      </span>
      <div>
        <Link href="#navigation-bar" scroll={false}>
          <a>top</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
