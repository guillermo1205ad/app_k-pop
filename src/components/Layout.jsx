import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <div className="sky-glow" aria-hidden="true" />
      <div className="sky-glow sky-glow-two" aria-hidden="true" />
      <div className="sparkle-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
