import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">ADAPTEV</span>
        <Link href={"/about"}>
          <a className="link link-hover">september decodev project</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
