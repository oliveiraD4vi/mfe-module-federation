import { mount as productsMount } from 'Products/ProductsIndex';
import { mount as cartMount } from 'Cart/CartShow';

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
