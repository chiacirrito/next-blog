import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";
import Image from "next/image";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, []);

  return (
    <div className={styles.dPost}>
      <Image src={postData.image} alt={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}
