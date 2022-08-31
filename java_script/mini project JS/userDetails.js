let user = JSON.parse(localStorage.getItem('user'));

let postsWrap = document.getElementsByClassName('postsWrap')[0];

let userInfo = document.getElementsByClassName('userInfo')[0];

function iterate(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {

                iterate(obj[property]);
            } else {
                let fieldOfUser = document.createElement('p');

                fieldOfUser.innerText = property + " : " + obj[property];

                userInfo.appendChild(fieldOfUser)
            }
        }
    }
}

iterate(user);

let buttonUserPost = document.getElementsByClassName('buttonUserPost')[0];

async function getPosts(id) {
    try {
        const posts = await (fetch(' https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then((response) => response.json())
            .then(value => {
                console.log('2', value);
                return value
            }))
        for (const post of posts) {

            let titleDivWrap = document.createElement('div');
            titleDivWrap.className = 'postsDiv'

            let titleDiv = document.createElement('div');
            titleDiv.className = 'postDiv';
            titleDiv.innerText = post.title;

            let buttonPostInfo = document.createElement('button');
            buttonPostInfo.innerText = 'post-details';

            titleDivWrap.appendChild(titleDiv);
            titleDivWrap.appendChild(buttonPostInfo);

            postsWrap.appendChild(titleDivWrap);

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









