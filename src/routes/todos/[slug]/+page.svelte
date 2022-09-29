<script>
	import { page } from '$app/stores';
  import { TodoStore } from '../../store';
  const slug = $page.params.slug
  const todo = $TodoStore.find((todo) => todo.id == slug)
</script>

{#if todo}
  <p>Id: {todo.id}</p>
  <p>Text: {todo.text}</p>
  <p>Pending: {todo.pending}</p>
  <p>Done: {todo.done}</p>
  <p>Removed: {todo.removed}</p>
{/if}

<a href="/todos">Go Back</a>


