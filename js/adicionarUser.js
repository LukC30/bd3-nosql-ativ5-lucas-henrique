
const form = document.querySelector("#formAluno")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('Alunos').add({
        Turma: form.Turma.value,
        Nome: form.Nome.value,
        DataNasc: form.DataNascimento.value,
        Email: form.Email.value,
        RG: form.RG.value,
        TelAluno: form.TelAluno.value
    }).then(() => {
        form.Turma.value = ""
        form.Nome.value = ""

        form.DataNascimento.value = ""
        form.Email.value = ""

        form.RG.value = ""
        form.TelAluno.value = ""
        window.location.reload();
    })


})

