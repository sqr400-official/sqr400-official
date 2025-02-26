import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";
import styles from "./BlogSingle.module.css";
import { Link, useParams } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { usePosts } from "../hooks/usePosts";
const BlogSingle = () => {
  const { id } = useParams();
  const { posts } = usePosts();

  const post = posts.find((p) => p.id === id);

  const getRandomPosts = (products, count = 3) => {
    // Shuffle the products array using Fisher-Yates algorithm
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const randomPosts = getRandomPosts(posts, 3);

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
                <time dateTime={post.createdAt.toISOString()}>
                  {post.createdAt.toDateString()}
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

export default BlogSingle;
