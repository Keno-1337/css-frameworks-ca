    $(document).ready(function () {
        // Get the search input and results container
        const $searchInput = $('#search-input');
        const $searchResults = $('#search-results');

        // Function to update search results
        function updateSearchResults() {
            const searchTerm = $searchInput.val().trim().toLowerCase();
            // You should replace this with your own logic to filter and display search results.
            // For example, you can filter posts based on their titles or content.
            // Here, we're just demonstrating the basic concept.
            const posts = [
                { title: 'Post 1', content: 'Content of post 1' },
                { title: 'Post 2', content: 'Content of post 2' },
                { title: 'Post 3', content: 'Content of post 3' },
            ];

            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm));

            // Render search results
            let resultsHTML = '';
            if (filteredPosts.length === 0) {
                resultsHTML = '<p>No results found.</p>';
            } else {
                filteredPosts.forEach(post => {
                    resultsHTML += `<div class="card">
                                      <div class="card-body">
                                          <h5 class="card-title">${post.title}</h5>
                                          <p class="card-text">${post.content}</p>
                                      </div>
                                  </div>`;
                });
            }

            $searchResults.html(resultsHTML);
        }

        // Bind the updateSearchResults function to the input event
        $searchInput.on('input', updateSearchResults);

        // Trigger initial search
        updateSearchResults();
    });