
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '20px' }}>
      <header>
        <h1>Review Page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} ChainLib</p>
      </footer>
    </div>
  );
};

export default Layout;