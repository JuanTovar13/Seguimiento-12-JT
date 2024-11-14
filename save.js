function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    
    const newContact = { name, phone, email, address }
    
    if (editIndex === null) {
        contacts.push(newContact)
    } else {
        contacts[editIndex] = newContact
        editIndex = null
        document.getElementById('form-title').textContent = 'Añadir Contacto'
    }
    
    saveContacts()
    renderContacts()
    form.reset()
})