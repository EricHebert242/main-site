import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu';

new MobileMenu();

if (module.hot) {
  module.hot.accept();
}