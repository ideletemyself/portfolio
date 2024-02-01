import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

type Blog = {
  slug: string;
  meta: {
    date: string;
    image: string;
    title: string;
    description: string;
    // Add other properties of the meta object here
  };
  // Add other properties of the blog object here
};

export default function Blog() {
  const blogDir = 'blogs';

  const files = fs.readdirSync(path.join(blogDir));

  const blogs: Blog[] = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
  
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: {
        date: frontMatter.date,
        image: frontMatter.image,
        title: frontMatter.title,
        description: frontMatter.description,
        // Add other properties of the meta object here
      },
      slug: filename.replace('.mdx', ''),
      // Add other properties of the blog object here
    };
  });

  const sortedBlogs = blogs.sort((a: Blog, b: Blog) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return (
    <>
      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        The Blogs
      </h1>
      <div className='flex flex-col py-8 bg-behr-debonair-blue'>
        <div className='bg-behr-debonair-blue py-8'>
          <div
            id='hiku'
            className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'
          >
            <article
              className='bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4'
            >
              <p>Fingers dance on keys</p>
              <p>Ideas weave into words</p>
              <p>Worlds unfold in text</p>
            </article>
          </div>
        </div>
        <div id='blog-page-cards' className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center'>
          {sortedBlogs.map((blog: Blog) => (
            <div className='bg-behr-debonair-blue px-2 py-2' key={blog.slug}>
              <div className='bg-behr-debonair-blue py-2 pb-8'>
                <article
                  className='bg-very-light-brown rounded overflow-hidden shadow-lg relative text-center sm:text-left font-light 
                              text-slate-500 max-w-sm'
                >
                  <Image
                    className='w-full object-cover rounded'
                    src={blog.meta.image}
                    alt='NextJS Logo'
                    width={300}
                    height={300}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />

                  <Link
                    className='text-med-light-magenta'
                    href={'/blog/' + blog.slug}
                    passHref
                  >
                    <p className='font-light text-4xl text-center text-med-light-magenta hover:opacity-60 pb-4 px-2'>
                      {blog.meta.title}
                    </p>
                  </Link>
                  <div className='flex flex-col items-center  px-4'>
                    <p className='prose prose-lg leading-normal text-slate-500 text-left no-underline pl-2 sm:pl-0'>
                      {blog.meta.description}
                    </p>
                    <p className='prose prose-lg text-slate-500 text-left no-underline pl-2 sm:pl-0'>
                      {blog.meta.date}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
