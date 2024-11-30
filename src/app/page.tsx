
import ArticleCard from "../components/articleCard";
import {BlogPost} from "./types";
import Link from 'next/link'

export default async function Home() {
  let data = await fetch('http://localhost:3000/api/posts')
  let posts: BlogPost[] = await data.json()

  return <>
    {
      posts.map((post) => (
        <Link key={post.id} href={{
          pathname: '/post',
          query: { 
            postId: post.id.toString(),
            title: post.title,
            excerpt: post.excerpt,
            text: post.text,
            image: post.image,
            publishDate: post.publishDate.toString()
          }
        }}>
         <ArticleCard post={post} />
        </Link>
      ))
    }
  </>;
}
