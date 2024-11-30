"use client"
import {BlogPost} from "../types";
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import styles from './post.module.css'

export default function Post() {
  const searchParams = useSearchParams()
  const postId = searchParams.get("postId");
  let postOfPage: BlogPost = {
    id: parseInt(searchParams.get("postId") ?? "-1"),
    title: searchParams.get("title") ?? "",
    excerpt: searchParams.get("excerpt") ?? "",
    text: searchParams.get("text") ?? "",
    image: searchParams.get("image") ?? "",
    publishDate: new Date(searchParams.get("publishDate") ?? ""), 
  }

  function formatDate(date: Date): String{
    const day: number = date.getDate();
    const monthIndex: number = date.getMonth();
    const year: number = date.getFullYear();
    const minutes: number = date.getMinutes();
    const hours: number = date.getHours();
    const seconds: number = date.getSeconds();
    return day+"-"+(monthIndex+1)+"-"+year+" alle ore "+ hours+":"+minutes;
  }

  return <>
  <div className={styles.postContainer}>
    <div className={styles.postTitle}>
      <h1>
        {postOfPage.title}
      </h1>
    </div>
    <div className={styles.postDate}>
      <h1>
        Pubblicato {formatDate(postOfPage.publishDate)}
      </h1>
    </div>
    <div className={styles.postImage}>
       <Image
            src={postOfPage.image}
            width={500}
            height={500}
            alt="Foto mancante"
          />
    </div>
    <div className={styles.postText}>
      {postOfPage.text}
    </div>
  </div>
  </>;
}

