import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useMDXComponents } from '../../../mdx-components';

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {

    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({ slug }: { slug: string }) {

    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: fontMatter, content } = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}

export default function Page({ params }: any) {
    const props = getPost(params);

    // Define your custom components
    const components = useMDXComponents({
        h1: ({ children }) => <h1 className='text-med-light-magenta leading-6'>{children}</h1>,
        h2: ({ children }) => <h2 className='text-slate-500 leading-6'>{children}</h2>
        // Add more custom components as needed
    });

    return (
        <div className='bg-behr-debonair-blue py-4'>
            <div className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
                <article className="bg-very-light-brown rounded shadow-lg relative prose prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4">
                    <MDXRemote source={props.content} components={components} ></MDXRemote>
                </article>
            </div>
        </div>
    )
}