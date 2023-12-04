function solve() {
    const sections = Array.from(document.querySelectorAll('section'));
    sections.push(document.getElementById('results'));

    const answers = Array.from(document.getElementsByClassName('answer-wrap'));
    let rightAnswers = 0;

    for (const answer of answers) {
        answer.addEventListener('click', answerQuestion);
    }

    function answerQuestion(e) {
        const clickedAnswer = e.target;
        const section = sections.shift();

        switch(clickedAnswer.textContent) {
            case 'onclick':
                rightAnswers++;
                break;
            case 'JSON.stringify()':
                rightAnswers++;
                break;
            case 'A programming API for HTML and XML documents':
                rightAnswers++;
                break;
        }

        section.style.display = 'none';
        sections[0].style.display = 'block';

        if (sections.length === 1) {
            showResult(sections[0]);
        }
    }

    function showResult(ulResults) {
        const result = ulResults.querySelector('h1');

        if (rightAnswers === 3) {
            result.textContent = "You are recognized as top JavaScript fan!";
            return;
        }

        result.textContent = `You have ${rightAnswers} right answers`;
    }
}
