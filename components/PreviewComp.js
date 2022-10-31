import React from "react";

export default function PreviewComp({ data, hostname }) {
  return (
    <section className=" mx-2  rounded overflow-hidden lg:w-5/6 lg:mx-3">
      <div className="flex bg-gray-800  shadow-lg">
        <div className="min-h-32 w-32 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${data?.thumbnail})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundColor: 'black'

          }}
        >
        </div>
        <div className="flex p-3 h-full w-full justify-center items-center">
          <div className=" max-h-32 text-ellipsis">
            <span
              className=" block text-sm text-green-100 font-semibold leading-snug text-clip overflow-hidden hover:underline transition-all duration-200 mb-2"
              style={{
                maxHeight: "3.5rem",
              }}
            >
              {data?.title}
            </span>
            <span className="text-xs text-blue-300 leading-tight underline inline-flex ">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <a
                href={data?.url_overridden_by_dest || data?.url}
                target="_blank"
                rel="noopener"
                className="mx-1"
              >
                {hostname}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
