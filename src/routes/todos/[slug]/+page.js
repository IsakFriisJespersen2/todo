import { error } from '@sveltejs/kit';
import { TodoStore } from '../../store';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  };
  // throw error(404, 'Not found');
}
