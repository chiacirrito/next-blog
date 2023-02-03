import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);

  return (
    <div className={styles.dPost}>
      <img src={postData.image} alt={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}
