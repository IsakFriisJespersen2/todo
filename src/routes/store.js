import { writable } from 'svelte/store';

export const todoValue = writable('')

export const TodoStore = writable([
  {
    id: 1,
    text: "Laga mat",
    pending: false,
    done: false,
    removed: false
  },
  {
    id: 2,
    text: "Sova",
    pending: false,
    done: false,
    removed: false
  },
  {
    id: 3,
    text: "Vakna",
    pending: false,
    done: false,
    removed: false
  }
]);

export const createTodo = (text) => {
  TodoStore.update((currentTodos) => {
    let todo = {
      id: currentTodos.length + 1,
      text: text,
      pending: false,
      done: false,
      removed: false
    };
    return [todo, ...currentTodos];
  });
  todoValue.set('');
};

export const deleteTodo = async (todo) => {
  const promise = new Promise((resolve, reject) => {
    TodoStore.update((currentTodos) => {
      currentTodos.forEach((el, index) => {
        if (el.id === todo.id) {
          currentTodos[index].pending = true;
        }
      })
      
      return currentTodos
    })
    setTimeout(() => {
      if (!todo.pending) {
        reject();
      }
      resolve();
    }, 2000);
  });
  try {
    await promise;

    TodoStore.update((currentTodos) => {
      return currentTodos.map((t) => {
        if (t.id === todo.id) {
          t.removed = true;
          t.pending = false;
        }

        return t;
      });
    })
  } catch {
    console.log('Undid remove');
  }
};

export const undoRemove = (todo) => {
  TodoStore.update((currentTodos) => {
    return currentTodos.map((t) => {
      if (t.id === todo.id) {
        t.pending = false;
        t.removed = false;
      }

      return t;
    })
  });
  
};

export const markAsDone = (todo) => {
  TodoStore.update((currentTodos) => {
    return currentTodos.map((t) => {
      if (t.id === todo.id) {
        t.done = !t.done;
      }
  
      return t;
    })
  });
};
