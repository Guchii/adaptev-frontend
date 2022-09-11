import { NextPageContext } from "next";
import type { FC } from "react";
import { readdirSync } from "fs";
import path from "path";

export async function getStaticProps(context: NextPageContext) {
  const paths: Array<string> = [];
  var files = readdirSync(path.join("public/data"));

  paths.push(...files);

  return {
    props: {
      paths,
    },
  };
}

const Data: FC<{ paths: string[] }> = ({ paths }) => {
  return (
    <section className="p-8">
      <h1 className="pb-4 text-4xl">Available Data:</h1>
      {paths.map((path, i) => (
        <a
          className="block text-2xl font-semibold underline"
          key={i}
          href={"/data/" + path}
          rel="noreferrer"
          target={"_blank"}
        >
          {path}
        </a>
      ))}
    </section>
  );
};

export default Data;
