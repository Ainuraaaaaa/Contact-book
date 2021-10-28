import React, { useState } from 'react';

//CardContact у меня отвечает за изменения

const CardContact = (props) => {
    const [name, setName] = useState(props.cardContact.name);
    const [surname, setSurname] = useState(props.cardContact.surname);
    const [phone, setPhone] = useState(props.cardContact.phone);

    function handleSaveClick() {
        let contact = { ...props.cardContact };
        contact.name = name;
        contact.surname = surname;
        contact.phone = phone;

        props.handleSaveCartedContact(contact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Имя"
                value={name}
            />
            <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="Фамилия"
                value={surname}
            />
            <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Номер телефона"
                value={phone}
            />
            <button onClick={handleSaveClick}>Save</button>

        </div>
    );
};

export default CardContact;
