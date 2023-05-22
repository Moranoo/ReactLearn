const Work = ({ NomProjet, description, ProjetImg, ProjetLien }) => {
    return (
        <div className="work">
            <h3>{NomProjet}</h3>
            <img src={ProjetImg} alt="ProjetImg" style={{ width: '50%', borderRadius: '50%' }} />
            <p>{description}</p>
            <a href={ProjetLien} target="_blank" rel="noreferrer">Lien vers le projet</a>
        </div>
    );
}

export default Work;