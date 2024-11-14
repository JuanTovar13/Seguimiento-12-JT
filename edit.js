function editContact(index) {
    const contact = contacts[index]
    document.getElementById('name').value = contact.name
    document.getElementById('phone').value = contact.phone
    document.getElementById('email').value = contact.email
    document.getElementById('address').value = contact.address
    
    document.getElementById('form-title').textContent = 'Editar Contacto'
    editIndex = index
}


function deleteContact(index) {
    contacts.splice(index, 1)
    saveContacts()
    renderContacts()
}