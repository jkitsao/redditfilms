import React from "react";

export default function PreviewComp({ data }) {
  return (
    <section className="mb-8 mx-2  rounded overflow-hidden">
      <div className="flex bg-gray-900">
        <div>
          <img
            src={data?.thumbnail}
            alt=""
            className="h-full w-32 min-w-32 object-cover"
          />
        </div>
        <div className="flex p-3 h-full w-full justify-center items-center">
          <div>
            <span className=" block text-sm text-gray-300 font-semibold">
              {data?.title}
            </span>
            <span className="text-xs text-blue-400 leading-tight underline ">
              <a
                href={data?.url_overridden_by_dest || data?.url}
                target="_blank"
                rel="noopener"
              >
                {data?.url_overridden_by_dest || data?.url}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
