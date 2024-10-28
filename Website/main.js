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
     username="anonimo";
    }

    // Increment post count for the unique post number
    postCount++;

    // Create a new post element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // Set the inner HTML of the post with name, post number, and content
    postDiv.innerHTML = `
     <div class="box">
        <span class="post-number">id #${postCount}</span>
        <span class="post-author">| nombre: ${username}</span>
        <hr>
        <div class="post-content">${postContent}</div>
    </div>
    
    `;

    // Append the new post to the post list
    document.getElementById("postList").appendChild(postDiv);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("postContent").value = "";
}
function scrollToBottom() {
    // Scrolls to the bottom of the page smoothly
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function showPopup() {
    document.querySelector(".boxA").style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    document.querySelector(".boxA").style.display = "none";
    
}
