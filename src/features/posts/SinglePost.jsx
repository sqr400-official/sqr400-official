import { Link, useParams } from "react-router-dom";
import Spinner from "../../Spinner";
import { useGetPostById } from "./postMutations";
import HeadNav from "../../components/HeadNav";
import styles from './SinglePost.module.css'
import MessageBox from "../../components/MessageBox";
import Footer from "../../components/Footer";

const SinglePost = () => {
  const { id } = useParams();
  const { data: postSingle, isLoading: isLoadingPost } = useGetPostById(id); // ✅ Pass `id` to hook
  
  if (isLoadingPost) return <Spinner />;
  
  // ✅ Ensure `post` is not null
  if (!postSingle) {
    return <p className={styles.errorMessage}>Post not found</p>;
  }
  
  const post = postSingle;
  
  // ✅ Convert `createdAt` to a Date object
  const createdAtDate = new Date(post.createdAt);
  
  // ✅ Ensure `getRandomPosts` receives an array
  const getRandomPosts = (products, count = 3) => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  
  const randomPosts = getRandomPosts(Array.isArray(postSingle) ? postSingle : [], 3);
  
  return (
    <>
      <HeadNav />
      <div className={styles.container}>
        <main className={styles.blogSingleContainer}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.meta}>
                By <strong>{post.author}</strong> |
                <time dateTime={createdAtDate.toISOString()}>
                  {createdAtDate.toDateString()}
                </time>
              </p>
            </header>
  
            <section
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: `${post.content}` }}
            />
          </article>
        </main>
  
        <aside className={styles.aside}>
          <h3 className={styles.asideHeading}>Related Posts</h3>
          <ul className={styles.asideList}>
            {randomPosts.map((post) => (
              <li key={post.id} className={styles.asideItem}>
                <Link to={`/blog/${post.id}`} className={styles.asideLink}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <MessageBox />
      <Footer />
    </>
  );
  };

export default SinglePost;
