import React from "react";

export default function PreviewComp({ data, hostname }) {
  return (
    <section className=" mx-2  rounded overflow-hidden">
      <div className="flex bg-gray-900">
        <div>
          <img
            src={data?.thumbnail}
            alt=""
            className="h-full  min-w-32 object-cover"
          />
        </div>
        <div className="flex p-3 h-full w-full justify-center items-center">
          <div>
            <span className=" block text-sm text-gray-300 font-semibold">
              {data?.title}
            </span>
            <span className="text-xs text-blue-200 leading-tight underline inline-flex ">
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
