<script>
	export let todo;
	export let markAsDone;
	export let deleteTodo;
	export let undoRemove;
</script>


<div style="display: flex; flex-direction: row; align-items: center">
	{#if !todo.removed}
		<input type="checkbox" id={todo.id} checked={todo.done} on:click={() => markAsDone(todo)} />
	{/if}
	<a href="/todos/{todo.id}" >{todo.text}</a>
	<button type="button" style="margin: 1rem;" on:click={() => deleteTodo(todo)}>
		{#if !todo.pending && !todo.removed}
			x
		{:else if todo.pending}
			...
		{/if}
	</button>
	{#if todo.pending || todo.removed}
		<button on:click={() => undoRemove(todo)}>Undo</button>
	{/if}
</div>
