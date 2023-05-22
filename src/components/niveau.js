function MyComponent(props) {
    const getNiveauLabel = (Niveau) => {
        switch (Niveau) {
            case '1':
                return 'Debutant';
            case '2':
                return 'Intermédiare';
            case '3':
                return 'Avancé';
            default:
                return 'Inconnu';
        }
    };

    const niveauLabel = getNiveauLabel(props.niveau);

    return (
        <div>
            <h1>Mon composant</h1>
            <div>Niveau: {niveauLabel}</div>
        </div>
    );
}
export default MyComponent;