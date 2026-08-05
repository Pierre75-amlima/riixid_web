import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '40px 40px',
    backgroundColor: '#ffffff', 
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '16px',
    padding: '100px 60px 0 60px',
    minHeight: '390px',
    overflow: 'hidden',
    position: 'relative',
  },
};

export default Footer;