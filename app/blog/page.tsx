import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from 'next/image';

export default function Blog() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <>
      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta">
        The Blogs
      </h1>
      <div className="flex flex-col py-8 bg-behr-debonair-blue">
        <div className="bg-behr-debonair-blue py-8">
          <div
            id="hiku"
            className="bg-behr-debonair-blue flex flex-wrap justify-center py-8"
          >
            <article
              className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4"
            >
              <p>Fingers dance on keys</p>
              <p>Ideas weave into words</p>
              <p>Worlds unfold in text</p>
            </article>
          </div>
        </div>
        {blogs.map((blog) => (
          <div className="flex flex-col bg-behr-debonair-blue py-2" key={blog.slug}>
            <div className="bg-behr-debonair-blue flex flex-wrap justify-center py-2 pb-8">
              <article
                className="bg-very-light-brown rounded shadow-lg relative text-center sm:text-left font-light 
                              text-slate-500 py-4 sm:py-8 px-4"
              >
                <Link
                  className="text-med-light-magenta"
                  href={"/blog/" + blog.slug}
                  passHref
                >
                  <h1 className="font-light text-4xl sm:text-6xl text-med-light-magenta hover:opacity-60 pb-4">
                    {blog.meta.title}
                  </h1>
                </Link>
                <Image className='place-self-center py-4' src={blog.meta.image} alt='NextJS Logo'
                       width={300}
                       height={100}
                       placeholder="blur"
                       blurDataURL={'/images/photos/DSC01836_small.webp'} />
                <p className="prose prose-lg leading-normal text-slate-500 text-left no-underline pl-2 sm:pl-0">
                  {blog.meta.description}
                </p>
                <p className="prose prose-lg text-slate-500 text-left no-underline pl-2 sm:pl-0">
                  {blog.meta.date}
                </p>
              </article>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
