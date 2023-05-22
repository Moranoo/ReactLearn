const Layout = ({ children }) => {
    return (
        <main>
            <header>
                <p>je suis Header</p>
            </header>
            <main>
                {children}
            </main>
            <br />
            <footer>Mourad S 2023</footer>
        </main>
    );
}

export default Layout;