const Projet = ({ nom, img, lien }) => {
    return (
        <>
            <h2>Je suis le projet : {nom}</h2>
            <img src={img} alt={nom} style={{ width: '200px', height: 'auto', borderRadius: '80%' }} />
            <a href={lien} title={nom} target="_blank" rel="noreferrer">
                Redirection vers le projet
            </a>
        </>
    );
}

export default Projet;