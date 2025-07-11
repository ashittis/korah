import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Korah. All rights reserved.</p>
        </footer>
    );
}
