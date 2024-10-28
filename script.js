let postCount = 0; // To keep track of the number of posts

function addPost() {
    // Get input values
    const username = document.getElementById("username").value.trim();
    const postContent = document.getElementById("postContent").value.trim();

    // Check if inputs are empty
    if (username === "" || postContent === "") {
        alert("Please enter both your name and a post.");
        return;
    }

    // Increment post count for the unique post number
    postCount++;

    // Create a new post element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // Set the inner HTML of the post with name, post number, and content
    postDiv.innerHTML = `
        <div class="post-number">Post #${postCount}</div>
        <div class="post-author">Posted by: ${username}</div>
        <div class="post-content">${postContent}</div>
    `;

    // Append the new post to the post list
    document.getElementById("postList").appendChild(postDiv);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("postContent").value = "";
}
