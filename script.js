// Fetch blogs from blogs.json and display them
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');
  
    // Fetch the JSON file
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => {
        const blogs = data.blogs;
  
        blogs.forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('blog');
  
          blogElement.innerHTML = `
            <img src="${blog.imageUrl}" alt="${blog.title}" />
            <div class="blog-details">
              <h2 class="blog-title">${blog.title}</h2>
              <p class="blog-description">${blog.description}</p>
              <a href="${blog.link}" target="_blank">Read More</a>
            </div>
          `;
  
          blogContainer.appendChild(blogElement);
        });
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  });
  