import logo from './assets/img/OPM.webp'
import './App.css'
import Layout from './components/layout/layout'
import Nom from './components/nom'
import linkedin from './components/linkedin'

function App() {
    return (
        <div className='App'>
            <Layout>
                <Nom nom='SALHI' prenom='Mourad' job='Développeur FullSteack' />
            </Layout>
            <Layout>
                <linkedin lien='https://www.linkedin.com/in/mourad-salhi-2b1b3b1b3/' />
            </Layout>
        </div>

    )



    /*return (
        <div className='App'>
            { <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    IsaSHiburidannaa<code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <div className='li'>
                    <section>Nom / Prénom / Job
                        <li>SALHI Mourad Dev FullSteack</li></section>
                    <section className='title'>Linkedin</section>
                    <li>Mourad Linkedin</li>
                    <section className='title'>Compétences (+10 items avec niveau)</section>
                    <li>Java ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Javascript ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Eclipse ---Niveau : <strong> Intermédiare</strong></li>
                    <li>PHP ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Python ---Niveau : <strong> Intermédiare</strong></li>
                    <li>ReactJS ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Jira ---Niveau : <strong> Intermédiare</strong></li>
                    <li>UX/UI ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Docker ---Niveau : <strong> Intermédiare</strong></li>
                    <li>Kubernet ---Niveau : <strong> Intermédiare</strong></li>
                    <section className='title'>Expériences</section>
                    <li>2020-2021 : Poste de Développeur FullSteack</li>
                    <li>2019-2020 : Développeur FullSteack</li>
                    <section className='title'>Diplomes</section>
                    <li>2022-2023 : Bachelor Développeur FullSteack</li>
                    <li>2021-2022 : Développeur Web</li>
                    <section className='title'>Centre d'intérêt</section>
                    <li>Jeux Vidéo</li>
                    <li>Jeux de société</li>
                    <li>Jeux de rôle</li>
                    <li>Jeux de cartes</li>
                    <li>Jeux de figurines</li>
                    <section className='title'>Url de votre site ou Git</section>
                    <li>
                        <a href='https://www.adultswim.fr/series/rick-and-morty' target="_blank" rel="noreferrer" >rickandmorty</a>
                    </li>
                    <section className='title'>Projet : Nom /Description : Img / Lien</section>
                    <li>Aquarium de Paris</li>
                    <li>Recherche via Api pour trouver des personnage</li>
                    <li>Projet 3</li>
                    <Projet
                    nom='Projet 1'
                    img={logo}
                    lien='https://www.adultswim.fr/series/rick-and-morty' />
                <Projet
                    nom='Projet 2'
                    img={logo}
                    lien='https://www.adultswim.fr/series/rick-and-morty' />
                </div>
            </header>
        </div>
    ) }
}
*/
}
export default App
