import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { useMDXComponents } from '../../../mdx-components';
import PrismLoader from "../../components/PrismLoader";

import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('blogs'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('blogs', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  // Define your custom components
  const components = useMDXComponents({
    h1: ({ children }) => (
      <h1 className='prose prose-2xl sm:text-7xl pb-4 text-med-light-magenta'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='prose prose-xl pb-4 text-slate-500'>{children}</h2>
    ),
    Image: ({ src, alt, width, height }) => (
      <Image
        className='rounded'
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    ),
  });

  return (
    <div className='flex flex-col w-full bg-behr-debonair-blue py-4'>
      <div className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
        <article
          className='flex flex-col items-center bg-very-light-brown rounded shadow-lg relative leading-normal prose prose-lg
                                    text-left font-light text-slate-500 py-8 px-4 language-ts'
        >
          <MDXRemote source={props.content} components={components}></MDXRemote>
          <PrismLoader />
        </article>
      </div>
    </div>
  );
}
