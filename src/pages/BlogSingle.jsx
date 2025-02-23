import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";
import styles from './BlogSingle.module.css'
const BlogSingle = () => {
  return (
    <>
      <HeadNav />
      <main className={styles.blogSingleContainer}>
        <article>
          <header>
            <h2>Introduction</h2>
            <p>
              Learn how to structure your blog posts to improve SEO and user
              engagement.
            </p>
          </header>

          <section>
            <h2>1. Use Semantic HTML</h2>
            <p>
              Using proper HTML5 semantic elements like &lt;header&gt;,
              &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt;
              improves SEO and accessibility.
            </p>
          </section>

          <section>
            <h2>2. Optimize Meta Tags</h2>
            <p>
              Ensure your meta title, description, and keywords are optimized
              for relevant search queries.
            </p>
          </section>

          <section>
            <h2>3. Improve Readability</h2>
            <p>
              Use short paragraphs, bullet points, and images with alt text for
              better readability and engagement.
            </p>
          </section>

          <footer>
            <p>
              Published on <time dateTime="2025-02-23">February 23, 2025</time>{" "}
              by <strong>Your Name</strong>
            </p>
          </footer>
        </article>
      </main>
      <aside>
        <h3>Related Posts</h3>
        <ul>
          <li>
            <a href="/seo-tips">SEO Tips for Beginners</a>
          </li>
          <li>
            <a href="/content-strategy">Content Strategy for 2025</a>
          </li>
        </ul>
      </aside>{" "}
      <Footer />
    </>
  );
};

export default BlogSingle;
