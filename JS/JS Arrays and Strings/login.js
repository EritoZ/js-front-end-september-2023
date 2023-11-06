function login(array) {
    const [username, ...strings] = array;
    const password = username.split('').reverse().join('');

    for (let i = 0; i < 4; i++) {
        if (password === strings[i]) {
            console.log(`User ${username} logged in.`)
            return
        }

        if (i === 3) {
            break
        }

        console.log("Incorrect password. Try again.");
    }

    console.log(`User ${username} blocked!`)
}

login(['Acer','login','go','let me in','recA'])