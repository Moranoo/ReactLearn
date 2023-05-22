const Url = ({ lien }) => {
    return (
        <div className='Url'>
            <h3>Url de votre site ou Git</h3>
            <ul>
                {lien.map((liens) => (
                    <li key={liens.id}>
                        <a href={liens.name} target="_blank" rel="noreferrer">Liens vers site</a>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Url;