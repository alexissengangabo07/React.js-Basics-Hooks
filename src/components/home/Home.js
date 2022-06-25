import React from 'react'
import Image from '../../images/react-hooks.webp';
import './home.css';

function Home() {
  return (
    <main className='main'>
      <section>
        <h2>Les Hooks en React</h2>
      <article>
        <img src={Image} alt="React Hooks" className='image' />
      </article>
      <article>
        <p>
        <strong>Les hooks constituent une évolution MAJEURE de React</strong>. 
        Ils permettent enfin d'utiliser des functional components même lorsque vous avez besoin de disposer d'un 
        state ou lorsque vous souhaitez exécuter du code à des moments très spécifiques (après le premier render, 
        lorsque qu'une variable est mise à jour etc...). Autrement dit 
        lorsque vous avez besoin de lifecycle hooks. 
        Le cas le plus typique étant le besoin d'effectuer une requête AJAX après le premier render.
        </p>
        <p>
        Jusqu'à la version 16.8 de React, il vous fallait obligatoirement créer des classes plutôt de que des fonctions. 
        Désormais, grâce aux hooks, vous pourrez créer des components moins verbeux - vos chers functional components - y 
        compris dans les situations pré-citées.
        </p>
        <p>
        Si l'on ajoute à cela la possibilité de créer des <strong>custom hooks</strong>, vos applications pourront devenir 
        <strong>plus composables</strong> afin que des fonctionnalités 
        requises par plusieurs components puissent être aisément partagées.
        </p>
        <p>
        Sans doute avez-vous entendu dire que la combinaison de certains hooks permet de remplacer Redux. 
        C'est le cas dans certaines situations. Ainsi, Redux a encore de beaux jours devant lui 
        sur des gros projets mais pourra avantageusement être par l'association de certains hooks
        </p>
      </article>
    </section>
    </main>
  )
}

export default Home