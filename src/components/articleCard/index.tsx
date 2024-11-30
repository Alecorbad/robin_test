
"use client";
import { useState } from "react";
import Image from 'next/image'
import { BlogPost } from "../../app/types"
import styles from "./articleCard.module.css"

type ArticleCardProps = {
  post: BlogPost;
};

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <>
    <div className={styles.cardContainer} >
      <div className={styles.cardImage}>
       <Image
            src={post.image}
            width={500}
            height={500}
            alt="Foto mancante"
          />
      </div>    
      <div className={styles.cardTitle}>
        {post.title}
      </div>    
      <div className={styles.cardExcerpt}>
        {post.excerpt}
      </div>    
    </div>    
    </>
  );
};

export default ArticleCard;
