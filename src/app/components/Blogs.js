export default function Blogs({ posts }) {
  const hasRealPosts = posts && posts.length > 0;

  return (
    <section className="section" id="blogs">
      <h2 className="section-title">My recent blogs</h2>
      
      {hasRealPosts ? (
        <>
          <div className="blog-list">
            {posts.map((post) => (
              <a
                key={post.id}
                href={`https://blogsbymadesh.live/blog/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-item"
              >
                <span className="blog-title">{post.title}</span>
                <span className="blog-date">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </a>
            ))}
          </div>
          <p className="blogs-more">
            <a
              href="https://blogsbymadesh.live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all blogs →
            </a>
          </p>
        </>
      ) : (
        <div style={{ padding: "1rem", background: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
          <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
            I write blogs. Find my blogs at{" "}
            <a 
              href="https://blogsbymadesh.live/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontWeight: "500", textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              blogsbymadesh.live
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
