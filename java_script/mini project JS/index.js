async function getUsers() {
    try {
        const users = await (fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => {
                return value
            }))

        let wrap1 = document.getElementById('wrap');
        let wrap2 = document.getElementsByClassName('userWrap')[0];

        for (const user of users) {
            let userInfo = document.createElement('div');
            let userIdName = document.createElement('p');

            userInfo.className = 'userDiv'

            let buttonUserDetails = document.createElement('button');
            buttonUserDetails.className = 'userButtonDetails';
            buttonUserDetails.innerText = 'user details';

            userIdName.innerText = `${user.id}. ${user.name}`
            userInfo.append(userIdName, buttonUserDetails)
            wrap2.appendChild(userInfo);
            wrap1.appendChild(wrap2)

            buttonUserDetails.addEventListener('click', (event) => {

                localStorage.setItem('user', JSON.stringify(user))
                window.open('user_details.html');
            })
        }
    } catch (e) {
        console.warn("It broken down!!!", e)
    }
}

getUsers();


