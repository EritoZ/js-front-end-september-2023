function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(baseUrl)
        .then(response => response.json())
        .then(createProfiles)
        .catch()

    function createProfiles(data) {
        data = Object.values(data);
        const main = document.getElementById('main');
        let baseProfile = main.removeChild(main.firstElementChild);

        data.forEach((person, index) => {
            const [
                lock,
                unlock,
                username,
                email,
                age
            ] = baseProfile.getElementsByTagName("input");

            email.parentNode.hidden = true;

            baseProfile.lastElementChild.addEventListener("click", showMore);

            lock.name = lock.name.replace(/\d+/, (index + 1).toString());
            unlock.name = lock.name;

            username.value = person.username;
            email.value = person.email;
            age.value = person.age;

            main.appendChild(baseProfile);
            baseProfile = baseProfile.cloneNode(true);
        })

        function showMore(e) {
            const button = e.currentTarget;
            const currentProfile = button.parentNode;
            const unlock = currentProfile.querySelector("input[value=unlock]");

            if (!unlock.checked) {
                return;
            }

            const hiddenInfo = button.previousElementSibling;

            if (button.textContent === 'Show more') {
                hiddenInfo.hidden = false;
                button.textContent = "Hide it";

                return;
            }

            hiddenInfo.hidden = true;
            button.textContent = "Show more"
        }
    }
}