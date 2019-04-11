let seed = 0;
export enum FilterState {
  ALL, COMPLETED, ACTIVE
}
export interface ITodoState {
  filterName: string;
  filterState: FilterState;
  todos: Array<{ id: number, name: string, completed: boolean }>
}
const initState: ITodoState = {
  filterName: "",
  filterState: FilterState.ALL,
  todos: [
    { id: ++seed, name: "javascript", completed: false },
    { id: ++seed, name: "typescript", completed: true },
    { id: ++seed, name: "python", completed: true },
    { id: ++seed, name: "java", completed: false },
    { id: ++seed, name: "c++", completed: false },
    { id: ++seed, name: "c#", completed: false },
    { id: ++seed, name: "c", completed: false },
  ],
};
export type TodoAction =
  | IUpdateTodoFilterNameAction
  | IUpdateTodoFilterStateAction
  | IAddTodoAction
  | IUpdateTodoNameAction
  | IUpdateTodoCompleteAction
  ;
export function todoReducer(state: ITodoState = initState, action: TodoAction): ITodoState {
  switch (action.type) {
    case "update_todo_filter_name": return update_todo_filter_name(state, action);
    case "update_todo_filter_state": return update_todo_filter_state(state, action);
    case "add_todo": return add_todo(state, action);
    case "update_todo_name": return update_todo_name(state, action);
    case "update_todo_complete": return update_todo_complete(state, action);
  }
  return state;
}

interface IUpdateTodoFilterNameAction { type: "update_todo_filter_name"; value: string; }
function update_todo_filter_name(state: ITodoState, { value: filterName }: IUpdateTodoFilterNameAction): ITodoState {
  return state.filterName === filterName ? state : { ...state, filterName };
}
export function updateTodoFilterName(value: string): TodoAction {
  return { type: "update_todo_filter_name", value }
}

interface IUpdateTodoFilterStateAction { type: "update_todo_filter_state"; value: FilterState; }
function update_todo_filter_state(state: ITodoState, { value: filterState }: IUpdateTodoFilterStateAction): ITodoState {
  return state.filterState === filterState ? state : { ...state, filterState };
}
export function updateTodoFilterState(value: FilterState): TodoAction {
  return { type: "update_todo_filter_state", value }
}

interface IAddTodoAction { type: "add_todo"; value: string; }
function add_todo(state: ITodoState, action: IAddTodoAction): ITodoState {
  const todos = state.todos.concat({ id: ++seed, name: action.value, completed: false });
  return { ...state, todos };
}
export function addTodo(value: string): TodoAction {
  return { type: "add_todo", value };
}

interface IUpdateTodoNameAction { type: "update_todo_name"; id: number; name: string; }
function update_todo_name(state: ITodoState, { id, name }: IUpdateTodoNameAction): ITodoState {
  const todos = state.todos.map(x => {
    if (x.id !== id) { return x; }
    return { ...x, name }
  });
  return { ...state, todos }
}

export function updateTodoName(id: number, name: string): TodoAction {
  return { type: "update_todo_name", id, name };
}

interface IUpdateTodoCompleteAction { type: "update_todo_complete"; id: number; completed: boolean; }
function update_todo_complete(state: ITodoState, { id, completed }: IUpdateTodoCompleteAction): ITodoState {
  const todos = state.todos.map(x => {
    if (x.id !== id) { return x; }
    return { ...x, completed }
  });
  return { ...state, todos }
}
export function updateTodoComplete(id: number, completed: boolean): TodoAction{
  return { type: "update_todo_complete", id, completed };
}