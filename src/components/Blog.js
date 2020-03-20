import React from 'react';

function Blog() {
  return (
    <section id="blog">
      <div>
        <h1>Blog</h1>
        <blockquote class="embedly-card">
          <h4>
            <a href="https://medium.com/@tiffhuddleston">
              Tiffany Huddleston - Medium
            </a>
          </h4>
          <p>
            Read writing from Tiffany Huddleston on Medium. Every day, Tiffany
            Huddleston and thousands of other voices read, write, and share
            important stories on Medium.
          </p>
        </blockquote>
        <script
          async
          src="//cdn.embedly.com/widgets/platform.js"
          charset="UTF-8"
        ></script>
      </div>
    </section>
  );
}

export default Blog;
