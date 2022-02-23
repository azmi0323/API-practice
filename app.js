function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(ref => ref.json())
        .then(data => callGetPost(data))
}
getPost();

function callGetPost(data) {
    
    const posts = document.getElementById('posts');
    for (const post of data) {
        console.log(post)
        
        const div = document.createElement('div');
        div.classList.add('pBody')
        div.innerHTML = `
        <h1>${post.id}</h1>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        posts.appendChild(div)
    }
}