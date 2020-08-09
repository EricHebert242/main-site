import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu';
import HeaderNavigation from './modules/HeaderNavigation';

new MobileMenu();
new HeaderNavigation();

if (module.hot) {
  module.hot.accept();
}