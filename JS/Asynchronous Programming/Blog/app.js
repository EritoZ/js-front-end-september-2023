function attachEvents() {
    const buttonView = document.getElementById('btnViewPost');
    const postsMenu = buttonView.previousElementSibling;
    const buttonLoadPosts = postsMenu.previousElementSibling;

    // Really dumb requirement instead of directly fetching the data.
    const postData = {};

    buttonLoadPosts.addEventListener('click', loadPosts);
    buttonView.addEventListener('click', showBlog)

    function loadPosts() {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(response => response.json())
            .then(setPosts)
            .catch();

        function setPosts(data) {
            postsMenu.textContent = '';

            data = Object.values(data);

            for (const value of data) {
                const post = document.createElement('option');
                post.value = value.id;
                post.textContent = value.title;

                postData[value.id] = value;

                postsMenu.appendChild(post);
            }
        }``
    }

    function showBlog() {
        const postId = postsMenu.value;

        processBlog(postData[postId])

        function processBlog(blogObject) {
            const postTitle = buttonView.nextElementSibling;
            const postBody = postTitle.nextElementSibling;

            postTitle.textContent = blogObject.title;
            postBody.textContent = blogObject.body;

            fetch(`http://localhost:3030/jsonstore/blog/comments`)
                .then(promise => promise.json())
                .then(processComments)
                .catch();

            function processComments(comments) {
                comments = Object.values(comments);

                const postComments = postBody.nextElementSibling.nextElementSibling;
                postComments.textContent = '';

                for (const object of comments) {
                    if (object.postId === postId) {
                        const liComment = document.createElement('li');
                        liComment.textContent = object.text;
                        liComment.id = object.id;

                        postComments.appendChild(liComment);
                    }
                }
            }
        }
    }
}

attachEvents();