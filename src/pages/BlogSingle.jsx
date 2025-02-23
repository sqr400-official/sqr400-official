import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";
import styles from "./BlogSingle.module.css";
import StickyComponent from "../components/StickyComponent";

const BlogSingle = () => {
  return (
    <>
      <HeadNav />
      <main className={styles.blogSingleContainer}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h2 className={styles.heading}>Introduction</h2>
            <p className={styles.paragraph}>
              Learn how to structure your blog posts to improve SEO and user
              engagement.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Use Semantic HTML</h2>
            <p className={styles.paragraph}>
              Using proper HTML5 semantic elements like &lt;header&gt;,
              &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt;
              improves SEO and accessibility.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Optimize Meta Tags</h2>
            <p className={styles.paragraph}>
              Ensure your meta title, description, and keywords are optimized
              for relevant search queries.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Improve Readability</h2>
            <p className={styles.paragraph}>
              Use short paragraphs, bullet points, and images with alt text for
              better readability and engagement.
            </p>
          </section>

          <footer className={styles.footer}>
            <p className={styles.footerText}>
              Published on <time dateTime="2025-02-23">February 23, 2025</time>{" "}
              by <strong>Your Name</strong>
            </p>
          </footer>
        </article>
      </main>
      <aside className={styles.aside}>
        <h3 className={styles.asideHeading}>Related Posts</h3>
        <ul className={styles.asideList}>
          <li className={styles.asideItem}>
            <a href="/seo-tips" className={styles.asideLink}>
              SEO Tips for Beginners
            </a>
          </li>
          <li className={styles.asideItem}>
            <a href="/content-strategy" className={styles.asideLink}>
              Content Strategy for 2025
            </a>
          </li>
        </ul>
      </aside>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default BlogSingle;
