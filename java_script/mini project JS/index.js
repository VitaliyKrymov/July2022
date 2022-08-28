let usersArr = [];


// function printUsers(users) {
//
//     for (const user of usersArr) {
//
//         let wrap1 = document.getElementById('wrap')[0];
//
//         let userWrap = document.getElementsByClassName('userWrap');
//          // userWrap.innerText = `${user.id} ${user.name}`
//         userWrap.innerText = 'hello'
//         wrap1.appendChild(userWrap);
//     }
//
// }

async function getUsers() {
    try {
        const users = await (fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => {
                console.log('3', value);
                // usersArr = [...value];
                 return value

            }))
        let wrap1 = document.getElementById('wrap');
        let wrap2 =document.getElementsByClassName('userWrap')[0];
        // let btn=document.getElementsByClassName('btnUser')[0];

        for (const user of users) {
            let userInfo=document.createElement('div');
            let userIdName=document.createElement('p');

            userInfo.className='userDiv'

            let buttonUserDetails=document.createElement('button');
            buttonUserDetails.className='userButtonDetails';
            buttonUserDetails.innerText='user details';


            userIdName.innerText = `${user.id} ${user.name}`
            userInfo.append(userIdName,buttonUserDetails)
            wrap2.appendChild(userInfo);
            wrap1.appendChild(wrap2)
        }
        // let u1=document.getElementById('wrap');
        // u1.innerText='hfdslghkghgf';
        // let u2=document.getElementsByClassName('userWrap')[0];
        // u2.innerText='2345kfsgldgj'
        // printUsers(users);


    } catch (e) {
        console.warn("It broke down!!!", e)
    }
}

getUsers();
//
// console.log('1', getUsers());
// console.log('2', usersArr);

