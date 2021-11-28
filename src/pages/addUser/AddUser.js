import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const titleRef = useRef();
    const dolarRef = useRef();
    const addtocart= e =>{
         const name = nameRef.current.value;
         const title = titleRef.current.value;
         const dolar = dolarRef.current.value;


        const newUser = { name, title,dolar };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    alert('Successfully added the user')
                    e.target.reset();
                }
            })


        e.preventDefault();
    }
    return {
        addtocart
    }
};

export default AddUser;