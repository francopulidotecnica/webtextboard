let postCount = 0; // To keep track of the number of posts

function addPost() {
    // Get input values
    let username = document.getElementById("username").value.trim();
    const postContent = document.getElementById("postContent").value.trim();

    // Check if inputs are empty
    if (postContent === "") {
        alert("ingrese texto");
        return;
    }
    if (username === ""){
     username="anon";
    }

    // Increment post count for the unique post number
    postCount++;

    // Create a new post element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // Set the inner HTML of the post with name, post number, and content
    postDiv.innerHTML = `
    
        <span class="post-number">id #${postCount}</span>
        <span class="post-author">nombre #${username}</span>
        <hr>
        <div class="post-content">${postContent}</div>
    
    `;

    // Append the new post to the post list
    document.getElementById("postList").appendChild(postDiv);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("postContent").value = "";
}
