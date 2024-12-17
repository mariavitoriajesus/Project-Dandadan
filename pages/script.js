document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        momo: 0,
        okarun: 0,
        turbo: 0
    };

    const formData = new FormData(event.target);
    formData.forEach(value => {
        answers[value]++;
    });

    let result = "";
    if (answers.momo > answers.okarun && answers.momo > answers.turbo) {
        result = "Você é <strong>Momo Ayase</strong>: Determinado(a), corajoso(a) e protetor(a)!";
    } else if (answers.okarun > answers.momo && answers.okarun > answers.turbo) {
        result = "Você é <strong>Okarun</strong>: Curioso(a), leal e cheio(a) de surpresas!";
    } else {
        result = "Você é <strong>Turbo Granny</strong>: Divertido(a), imprevisível e sempre pronto(a) para uma piada!";
    }

    document.getElementById("result").innerHTML = `<div class='alert alert-success' role='alert'>${result}</div>`;
});