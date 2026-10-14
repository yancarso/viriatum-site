export function Footer() {
  return (
    <footer className="footer">

      {/* Topo: nav + instagram */}
      <div className="footer__nav">
        <div className="footer__links-group">
          <img src="/simbol.svg" className="footer__symbol" alt="" aria-hidden="true" />
          <ul className="footer__links">
            <li><a id="footer-link-como-funciona" href="#como-funciona" className="footer__link">Como funciona</a></li>
            <li><a id="footer-link-tratamentos" href="/tratamentos" className="footer__link">Tratamentos</a></li>
            <li><a id="footer-link-triagem" href="#triagem" className="footer__link">Triagem</a></li>
            <li><a id="footer-link-faq" href="#faq" className="footer__link">FAQ</a></li>
          </ul>
        </div>

        <a
          id="footer-link-instagram"
          className="footer__ig"
          href="https://www.instagram.com/institutoviriatum/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram do Instituto Viriatum"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          <span>institutoviriatum</span>
        </a>
      </div>

      {/* Logo gigante full-width */}
      <div className="footer__logo-wrap">
        <img
          src="/logo-footer.svg"
          className="footer__logo-giant"
          alt="Instituto Viriatum"
        />
      </div>

      {/* Bottom: copyright + privacidade */}
      <div className="footer__bottom">
        <span className="footer__copy">
          © {new Date().getFullYear()} Instituto Viriatum. Todos os direitos reservados.
        </span>
        <span className="footer__copy">CNPJ 66.098.686/0001-03</span>
        <a id="footer-link-privacidade" href="/politica-de-privacidade" className="footer__privacy">Política de Privacidade</a>
      </div>

    </footer>
  )
}
