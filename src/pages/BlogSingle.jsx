import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";
import styles from "./BlogSingle.module.css";
import { Link, useParams } from "react-router-dom";
import posts from "../../data/posts";
const BlogSingle = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return <h2>Post not found!</h2>;
  
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
            <li className={styles.asideItem}>
              <Link to="/seo-tips" className={styles.asideLink}>
                SEO Tips for Beginners
              </Link>
            </li>
            <li className={styles.asideItem}>
              <Link to="/content-strategy" className={styles.asideLink}>
                Content Strategy for 2025
              </Link>
            </li>
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;
