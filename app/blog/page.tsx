import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'


export default function Blog() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map(filename => {

    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }

  })
  return (
    <div className='flex flex-col'>
      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta">
        The Blogs
      </h1>
      {blogs.map(blog => (
        <div className='bg-behr-debonair-blue py-4' key={blog.slug}>
          <div className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
            <article className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                              text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4">
                <Link className='prose text-med-light-magenta' href={'/blog/' + blog.slug} passHref>
                  <h1 className='prose text-5xl text-med-light-magenta no-underline leading-6'>{blog.meta.title}</h1>
                </Link>
                <p className='prose text-slate-500 no-underline'>{blog.meta.description}</p>
                <p className='prose text-slate-500 no-underline leading-3'>{blog.meta.date}</p>
            </article>
          </div>
        </div>
      ))}
    </div>
  )
}