import { NextPageContext } from "next";
import type { FC } from "react";

export async function getStaticProps(context: NextPageContext) {
  const paths: Array<string> = [];
  return {
    props: {
      paths,
    }, // will be passed to the page component as props
  };
}

const Data: FC<{ paths: string[] }> = ({ paths }) => {
  return (
    <section className="p-8">
      <h1 className="text-4xl">Available Data:</h1>
      {paths.map((path, i) => (
        <span className="block font-bold" key={i}>
          {path}
        </span>
      ))}
    </section>
  );
};

export default Data;
