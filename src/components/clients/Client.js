import React from 'react';
import './client.css';

function Client() {
  return (
    <div className="container">
        <div className="header">
            <h1>Clients</h1>
        </div>
        <main>
            <section className='section-flex'>
              <article className='articles'>
                <form>
                  <input type="text" placeholder="Entrer le nom du client" />
                  <input type="text" placeholder="Entrer le nom du client" />
                  <input type="text" placeholder="Entrer le nom du client" />
                  <input type="submit" className='submit-btn' value="Ajouter" />
                </form>
              </article>
              <article className='articles'>
                ok
              </article>
            </section>
        </main>
    </div>
  )
}

export default Client;