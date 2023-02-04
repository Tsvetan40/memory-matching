function init() {
    let db = null
    let objectStore = null
    let dbOpenRequest = window.indexedDB.open('users', 5)


    dbOpenRequest.addEventListener('error', (error) => {
        console.log(error)
    })

    dbOpenRequest.addEventListener('success', (e) => {
        db = e.target.result
        console.log('success', db)
    })

    dbOpenRequest.addEventListener('upgradeneeded', (e) => {
        db = e.target.result

        let oldVersion = e.oldVersion
        let newVersion = e.newVersion || e.version

        console.log(`Upgraded from ${oldVersion} to ${newVersion}`)

        if (!db.objectStoreNames.contains('user')) {
            //db.deleteObjectStore('user')

             objectStore = db.createObjectStore('user', { keyPath: 'email' })
             objectStore.createIndex('email', 'email', { unique: true })
             objectStore.createIndex('password', 'password', { unique: false })
        }

        if (!db.objectStoreNames.contains('score')) {
            //db.deleteObjectStore('user')

             objectStore = db.createObjectStore('score', { keyPath: 'email' })
             objectStore.createIndex('email', 'email', { unique: false })
             objectStore.createIndex('time', 'time', { unique: false })
        }

        console.log('upgraded', db)
    })
}

init()