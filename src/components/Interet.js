const Interet = ({ hobbies }) => {
    return (
        <div className="hobbies">
            <h3>Centre d'intérêt</h3>
            <ul>
                {hobbies.map((hobbie) => (
                    <li key={hobbie.id}>{hobbie.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Interet;