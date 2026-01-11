export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <small>© {year} Global Travel Companion (GTC)</small>
            <span className="app-footer__sep">|</span>
            <a href="#" onClick={(e) => e.preventDefault()}>
                Impressum
            </a>
        </footer>
    );
}
