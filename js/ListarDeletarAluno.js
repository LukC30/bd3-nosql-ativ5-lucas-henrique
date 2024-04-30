const list = document.querySelector("#list");

function renderBook(doc) {

    //Criação de elementos html
    let li = document.createElement('li');
    let Turma = document.createElement("span");
    let Nome = document.createElement("span");
    let Rg = document.createElement("span");
    let Email = document.createElement("span");
    let TelAluno = document.createElement("span");
    let DataNasc = document.createElement("span");
    let excluir = document.createElement("div");
    excluir.textContent = "X";



    //Carrega os dados dos elementos html
    li.setAttribute('data-id', doc.id);
    Turma.textContent = doc.data().Turma;
    Nome.textContent = doc.data().Nome;
    Rg.textContent = doc.data().RG;
    Email.textContent = doc.data().Email;
    TelAluno.textContent = doc.data().TelAluno;
    DataNasc.textContent = doc.data().DataNasc;

    //adicionando xd

    li.appendChild(Turma)
    li.appendChild(Nome)

    li.appendChild(Rg)
    li.appendChild(Email)

    li.appendChild(TelAluno)
    li.appendChild(DataNasc)
    li.appendChild(excluir);

    //exclusão de arquivo
    excluir.addEventListener('click', (event) => {
        let id = event.target.parentElement.getAttribute("data-id");
        alert(id)
        db.collection('Alunos').doc(id).delete().then(() => {

            window.location.reload();


        })
    })

    list.appendChild(li)

}

db.collection("Alunos").get()
    .then(
        (response) => {
            console.log(response.docs)
            response.docs.forEach(doc => {
                renderBook(doc);

            });
        }
    )