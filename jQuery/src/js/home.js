console.log('Hola Mundo');
const noCambia = "Leonidas";

let cambia = "@leonidasEsteban";

function cambiarNombre(nuevoNombre) {
    cambia = nuevoNombre;
}

const getUser = new Promise(function(todoBien, todoMal) {
    // llamar a un API
    setTimeout(function() {
        // luego de 3 segundos
        todoMal('se acabó el tiempo');
    }, 3000)
})

getUser
    .then(function() {
        console.log('todo está bien en la vida')
    })
    .catch(function(message) {
        console.log(message);
    })

    Promise.all([
        getUser,
        getUser,
    ])
    .then(function(message) {
        console.log(message);
    })
    .catch(function(message) {
        console.log(message);
    })

    $.ajax('https://randomuser.me/api/sdfasdfsdf', {
        method: 'GET',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })

    fetch('https://randomuser.me/api/')
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(function (user) {
        console.log('user', user.results[0].name.first)
    })
    .catch(function() {
        console.log('algo falló')
    });


    (async function load() {
        // await
        async function getData(url) {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        }

        const actionList = await getData('https://yts.am/api/vs/list_movies.json?genre=action')
        const dramaList = await getData('https://yts.am/api/vs/list_movies.json?genre=drama')
        const animationList = await getData('https://yts.am/api/vs/list_movies.json?genre=animation')
        console.log(actionList, dramaList, animationList)

        // let terrorList;
        // getData('')
        // .then(function (data) {
        //     console.log('terrorlist', data);
        //     terrorList = data;
        // })
        // console.log('actionList', actionList);
    }) ()