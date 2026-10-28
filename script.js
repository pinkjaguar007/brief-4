const openBtn = document.getElementById('openmodal');
const modal = document.getElementById('playermodal');


const closeBtn = document.getElementById('closemodal');
closeBtn.addEventListener('click', closeModal);

const playerform = document.querySelector('form')


const anuller = document.querySelector('#anuller-button')
anuller.addEventListener('click', closeModal)


openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});


function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    resetRole();
}




const namep = document.querySelector('#player-name')

const numberp = document.querySelector('#player-number')

let selectedRole = ""

const roleButtons = document.querySelectorAll('#playermodal .add-position button')

roleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        selectedRole = btn.dataset.role
        roleButtons.forEach(function (b) {
            b.classList.remove('ring-2', 'ring-white')
        })
        btn.classList.add('ring-2', 'ring-white')   // highlights the chosen button
    })
})

function resetRole() {
    selectedRole = ""
    roleButtons.forEach(function (b) {
        b.classList.remove('ring-2', 'ring-white')
    })
}

const roleColors = {
    gardien: 'bg-amber-400',
    defenseur: 'bg-blue-500',
    milieu: 'bg-green-500',
    attaquant: 'bg-red-500'
}


const selectedTitle = document.querySelector('#selected-player')


let selectedId = null



// slot position 

const slotSelect = document.querySelector('#players-list')

function renderField() {
    // reset all cells (GB, DC, ...)
    slotSelect.querySelectorAll('option').forEach(function (option) {
        if (option.value === "") return
        document.querySelector('.' + option.value).textContent = option.value.slice(0, 2).toUpperCase()
    })

    // write each placed player's name
    players.forEach(function (player) {
        if (player.slot) {
            document.querySelector('.' + player.slot).textContent = player.name
        }
    })
}

slotSelect.addEventListener('change', function () {
    if (selectedId === null || slotSelect.value === "") return

    // free the position if someone is already there
    players.forEach(function (p) {
        if (p.slot === slotSelect.value) p.slot = ""
    })

    const index = players.findIndex(function (p) {
        return p.id === selectedId
    })

    players[index].slot = slotSelect.value
    sendtolocalstorage()
    renderField()
})


const players = JSON.parse(localStorage.getItem("localstoragedata")) || [];

function sendtolocalstorage() {


    localStorage.setItem("localstoragedata", JSON.stringify(players))




}

//adding a player to the local

const addbutton = document.getElementById("ajouter")


playerform.addEventListener('submit', function (event) {

    event.preventDefault();

    event.preventDefault();

    if (selectedRole === "") {
        alert("Choisis un poste")
        return
    }


    const player = {
        name: namep.value,
        id: Date.now(),
        number: numberp.value,
        role: selectedRole,

    }

    playerform.reset();

    players.push(player)

    sendtolocalstorage()

    renderPlayers()
    closeModal()



}

)


// send player card to a list

const container = document.querySelector('#players-container')
const template = document.querySelector('#player-template')



function renderPlayers() {
    container.innerHTML = ""

    players.forEach(function (player) {
        const card = template.content.firstElementChild.cloneNode(true)

        card.querySelector(".player-name").textContent = player.name
        card.querySelector(".player-number").textContent = player.number

        card.querySelector(".player-name").textContent = player.name
        card.querySelector(".player-number").textContent = player.number

        const dot = card.querySelector(".player-dot")
        if (player.role) {
            dot.classList.add(roleColors[player.role])
        } else {
            dot.remove()   // old players saved without a position
        }

        card.addEventListener('click', function () {
            selectedId = player.id
            selectedTitle.textContent = player.name
        })

        container.appendChild(card)
    })

    document.querySelector('#players-count').textContent = players.length + " joueur(s)"
}

renderPlayers()

//// delete button

const deleteBtn = document.querySelector('#delete-btn')

deleteBtn.addEventListener('click', function () {
    if (selectedId === null) return

    const index = players.findIndex(function (p) {
        return p.id === selectedId
    })

    players.splice(index, 1)
    sendtolocalstorage()

    selectedId = null
    selectedTitle.textContent = "no players is selected"
    renderPlayers()
    renderField()
})








///// edite modale

const editbtn = document.querySelector('#edit-btn')
const editModal = document.querySelector('#edit-modal')
const editForm = document.querySelector('#edit-form')
const editName = document.querySelector('#edit-name')
const editNumber = document.querySelector('#edit-number')

//// fill the inputs and open the modal


editbtn.addEventListener('click', function () {
    if (selectedId === null) return

    const index = players.findIndex(function (p) {
        return p.id === selectedId
    })

    editName.value = players[index].name
    editNumber.value = players[index].number

    editModal.classList.remove('hidden')
    editModal.classList.add('flex')
})

///// click to save the new values


editForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const index = players.findIndex(function (p) {
        return p.id === selectedId
    })

    players[index].name = editName.value
    players[index].number = editNumber.value

    sendtolocalstorage()
    selectedTitle.textContent = players[index].name
    renderPlayers()
    closeEditModal()
})

///// 3. close the modal


function closeEditModal() {
    editModal.classList.add('hidden')
    editModal.classList.remove('flex')
}

document.querySelector('#edit-close').addEventListener('click', closeEditModal)
document.querySelector('#edit-cancel').addEventListener('click', closeEditModal)

