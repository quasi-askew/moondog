import Link from "next/link";
import Image from "next/image";
import sam from "../public/sam.jpg";
import { projects } from "../lib/projects";

function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24 mask mask-hexagon">
                <Image
                  alt="Sam"
                  src={sam}
                  layout="intrinsic"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold">Sam</h1>
            <p className="py-6">
              Web developer in Minneapolis, MN. Currently working in ecommerce
              and building in Shopify and Headless API environments.
            </p>
            <Link href="https://linktr.ee/sam.fortin">
              <a className="btn">Linktree</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
