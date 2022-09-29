<script>
	import Todo from './todo.svelte';
	import { todoValue, createTodo, markAsDone, deleteTodo, undoRemove, TodoStore } from '../../routes/store';
	let section = (t) => !t.removed;

</script>

<div class="flex flex-col items-center">
  <div class="content-center mt-56 w-1/2 h-1/2">
    <div>
      <div class="flex flex-row space-x-2">
        <input class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" bind:value={$todoValue} />
        <button class="bg-green-500 text-white font-bold py-2 px-4 rounded" on:click={() => {createTodo($todoValue)}}>Add</button>
      </div>
      
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => (section = (t) => !t.removed)}>Current</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => (section = (t) => t.done && !t.removed)}>Done</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => (section = (t) => t.removed)}>Removed</button>
      </div>
    </div>
    <div>
      {#each $TodoStore.filter(section) as todo}
      <Todo {todo} {markAsDone} {deleteTodo} {undoRemove} />
      {/each}
    </div>
  </div>
</div>
