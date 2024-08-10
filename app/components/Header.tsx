import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={`${styles.menuItem} ${styles.sale}`}>
            <a href="#">SALE</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Men</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Perfume For Men</a></li>
                <li><a href="#">Mens Grooming</a></li>
                <li><a href="#">Gift Set for Him</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Wallets & Card Holder</a></li>
                <li><a href="#">After Shave</a></li>
                <li><a href="#">Belt & Hand Pouch</a></li>
                <li><a href="#">Cufflinks</a></li>
                <li><a href="#">Leather Belt</a></li>
                <li><a href="#">Men Sandals</a></li>
                <li><a href="#">Pocket Squares</a></li>
                <li><a href="#">Suit Lapel Pins</a></li>
                <li><a href="#">Sunglasses For Men</a></li>
                <li><a href="#">Watches For Men</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Women</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Perfume For Women</a></li>
                <li><a href="#">Hair Mist</a></li>
                <li><a href="#">Beauty Accessories</a></li>
                <li><a href="#">Bracelet</a></li>
                <li><a href="#">Contour</a></li>
                <li><a href="#">Cosmetics & Makeup Products</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Eye Beauty</a></li>
                <li><a href="#">Hair Accessories</a></li>
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Bags For Women</a></li>
                <li><a href="#">Lip Makeup</a></li>
                <li><a href="#">Nail Products</a></li>
                <li><a href="#">Necklace</a></li>
                <li><a href="#">Gift Sets For Her</a></li>
                <li><a href="#">Rings For Women</a></li>
                <li><a href="#">Sunglasses For Women</a></li>
                <li><a href="#">Watches For Women</a></li>
                <li><a href="#">Face Blush</a></li>
                <li><a href="#">Fashion Accessories</a></li>
                <li><a href="#">Anklets For Women</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Unisex</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Perfume For Unisex</a></li>
                <li><a href="#">Miniature Perfumes</a></li>
                <li><a href="#">Concentrated Perfumes Oils</a></li>
                <li><a href="#">Contact Lens</a></li>
                <li><a href="#">Budget perfumes</a></li>
                <li><a href="#">Arabic Perfumes</a></li>
                <li><a href="#">Eyeglasses & Frames</a></li>
                <li><a href="#">Perfumes Set</a></li>
                <li><a href="#">Sunglasses For Unisex</a></li>
                <li><a href="#">Watches For Unisex</a></li>
                <li><a href="#">Watches Set</a></li>
                <li><a href="#">Watch Case & Jewelry Box</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Brands</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">DIOR</a></li>
                <li><a href="#">ARMANI</a></li>
                <li><a href="#">YVES SAINT LAURENT</a></li>
                <li><a href="#">VERSACE</a></li>
                <li><a href="#">MONT BLANC</a></li>
                <li><a href="#">CAROLINA HERRERA</a></li>
                <li><a href="#">PACO RABANNE</a></li>
                <li><a href="#">HOLY OUD</a></li>
                <li><a href="#">MARK DES VINCE</a></li>
                <li><a href="#">FAIZ NICHE</a></li>
                <li><a href="#">ARABIAN EAGLE</a></li>
                <li><a href="#">NUE</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Bath & Body</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Beauty Bar</a></li>
                <li><a href="#">Body Care</a></li>
                <li><a href="#">Body Lotion</a></li>
                <li><a href="#">Body Splash</a></li>
                <li><a href="#">Body Mist</a></li>
                <li><a href="#">Body Wash & Shower Gel</a></li>
                <li><a href="#">Deodorant Spray</a></li>
                <li><a href="#">Deodorant Stick</a></li>
                <li><a href="#">Foot Care</a></li>
                <li><a href="#">Hair Care</a></li>
                <li><a href="#">Oral Care</a></li>
                <li><a href="#">Sunblock Lotion</a></li>
                <li><a href="#">Skincare</a></li>
                <li><a href="#">Wellness Products</a></li>
                <li><a href="#">Hand Sanitizer</a></li>
                <li><a href="#">Face Care</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Home</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Bakhoor & Oud</a></li>
                <li><a href="#">Bakhoor Burner</a></li>
                <li><a href="#">Bakhoor Charcoal</a></li>
                <li><a href="#">Bakhoor Lighter</a></li>
                <li><a href="#">Dukhoon</a></li>
                <li><a href="#">Air Freshener</a></li>
                <li><a href="#">Aroma Diffusers</a></li>
                <li><a href="#">Scented Candles</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Travel</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Backpack</a></li>
                <li><a href="#">Briefcase</a></li>
                <li><a href="#">Car Fragrance</a></li>
                <li><a href="#">Duffle Bag</a></li>
                <li><a href="#">Travel & Holdall Bags</a></li>
                <li><a href="#">Perfume Atomizer</a></li>
                <li><a href="#">Bedding</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Kids</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Baby Care Products</a></li>
                <li><a href="#">Kids Watches</a></li>
                <li><a href="#">Perfumes For Kids</a></li>
                <li><a href="#">Lunchboxes & Water Bottles</a></li>
                <li><a href="#">Toys For Kids</a></li>
                <li><a href="#">Backpacks & School Bags</a></li>
                <li><a href="#">Baby Stroller & Pram</a></li>
              </ul>
            </div>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Offers</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Best Price</a></li>
                <li><a href="#">Under 49AED</a></li>
                <li><a href="#">Under 99AED</a></li>
                <li><a href="#">Under 149AED</a></li>
                <li><a href="#">Under 199AED</a></li>
                <li><a href="#">Under 249AED</a></li>
                <li><a href="#">Under 299AED</a></li>
                <li><a href="#">Under 399AED</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
