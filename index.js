const form = document.getElementById('contact-form')
const contactList = document.getElementById('contact-list')
const searchInput = document.getElementById('search-input')
let contacts = JSON.parse(localStorage.getItem('contacts')) || []
let editIndex = null


function renderContacts(filteredContacts = contacts) {
    contactList.innerHTML = ''
    filteredContacts.forEach((contact, index) => {
        const contactCard = document.createElement('div')
        contactCard.className = 'contact-card'
        
        contactCard.innerHTML = `
            <div>
                <h3>${contact.name}</h3>
                <p>Tel: ${contact.phone}</p>
                <p>Email: ${contact.email}</p>
                <p>Dirección: ${contact.address}</p>
            </div>
            <div class="contact-actions">
                <button onclick="editContact(${index})">Editar</button>
                <button onclick="deleteContact(${index})">Eliminar</button>
            </div>
        `
        contactList.appendChild(contactCard)
    })
}

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase()
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchValue) ||
        contact.phone.includes(searchValue) ||
        contact.email.toLowerCase().includes(searchValue) ||
        contact.address.toLowerCase().includes(searchValue)
    )
    renderContacts(filteredContacts)
});


window.onload = renderContacts;
