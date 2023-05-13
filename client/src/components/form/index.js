import React, { useState, useRef } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';
import { contactForm } from '../../utils/API'


function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email, and message
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check to see if the name field is empty. If so we set an error message to be displayed on the page
        if (!name) {
            setErrorMessage('Name is required');
            return;
        }
        // Check to see if the email is not valid. If so we set an error message to be displayed on the page
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        // Check to see if the message field is empty. If so we set an error message to be displayed on the page
        if (!message) {
            setErrorMessage('Message is required');
            return;
        }

        contactForm(name, email, message); 

        // Alert the user their message has been sent
        alert(`Your message has been submitted successfully! Sara will get back to you shortly.`);

        // If all fields have been filled in, clear the input
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <p>
                Hello {name}
            </p>
            <form ref={form} className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
