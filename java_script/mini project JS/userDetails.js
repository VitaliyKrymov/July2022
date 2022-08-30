let user = JSON.parse(localStorage.getItem('user'));

let wrap = document.getElementById('userWrap');

let userInfo = document.createElement('div');
userInfo.className='userInfo'

wrap.appendChild(userInfo);

function iterate(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {

                iterate(obj[property]);
            } else {
                let paragraph = document.createElement('p');
                let fieldOfUser = property + " : " + obj[property];

                paragraph.innerText = fieldOfUser;
                userInfo.appendChild(paragraph)
            }
        }
    }
}

iterate(user);

let buttonUserPost = document.createElement('button');
buttonUserPost.className = 'userButtonPost';
buttonUserPost.innerText = 'post of current user';
wrap.appendChild(buttonUserPost)

async function getPosts(id) {
    try {
        const posts = await (fetch(' https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then((response) => response.json())
            .then(value => {
                console.log('2', value);
                return value
            }))
        for (const post of posts) {

            let titleDiv = document.createElement('div');
            titleDiv.className='postDiv'
            console.log(post.title);
            titleDiv.innerText = post.title;

            let buttonPostInfo=document.createElement('button');
            buttonPostInfo.innerText='post-details'
            titleDiv.appendChild(buttonPostInfo)
            wrap.appendChild(titleDiv);

            buttonPostInfo.addEventListener('click', (event) => {

                localStorage.setItem('post', JSON.stringify(post));

                window.open('post_details.html');
            })
        }

    } catch (e) {
        console.warn("It broken down!!!", e)
    }
}

buttonUserPost.addEventListener('click', (event) => {

    let posts = getPosts(user.id);

    localStorage.setItem('posts', JSON.stringify(posts));
})









