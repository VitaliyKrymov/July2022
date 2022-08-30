let post = JSON.parse(localStorage.getItem('post'));

let wrap = document.getElementById('postWrap');
let postInfo = document.createElement('div');

wrap.appendChild(postInfo);

function iterate(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {

                iterate(obj[property]);
            } else {
                let paragraph = document.createElement('p');

                let fieldOfPost = property + " : " + obj[property];

                paragraph.innerText = fieldOfPost;

                postInfo.appendChild(paragraph);
            }
        }
    }
}

iterate(post);

async function getComments(id) {
    try {
        const comments = await (fetch(' https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then((response) => response.json())
            .then(value => {
                return value
            }))

        let commentWrap = document.getElementsByClassName('commentWrap')[0];

        for (const comment of comments) {
            console.log(comment);
            let commentDiv = document.createElement('div');
            commentDiv.className = 'commentDiv';
            commentDiv.innerText = comment.body;
            commentWrap.appendChild(commentDiv);

        }

    } catch (e) {
        console.warn("It broken down!!!", e);
    }
}

let comments = getComments(post.id);

