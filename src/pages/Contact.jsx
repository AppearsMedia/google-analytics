import React from 'react'

export default function Contact() {

    const handleClick = () => {
        // Push event to GTM dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'custom_event',
          label: 'My Button',
          test: {
            message: 'Testing for School'
          }
        });
    };

    return (
        <div>
        <a href='/'>Link to Startpage</a>


        <form id="test-form">
            <input type='text' name='name' />
            <input type='password' name='password' />
            <button type='submit'>Skicka</button>
        </form>

        <button id="button-click">Kontakta oss</button>
        <button onClick={handleClick}>Custom Action</button>
        </div>
    )
}
