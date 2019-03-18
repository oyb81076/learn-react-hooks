import { omit } from "lodash"
import * as React from "react"
type Action =
  | { type: "loading", id: string }
  | { type: "loaded", id: string, data: string }
  | { type: "error", id: string, error: Error }
interface IState {
  data: Record<string, string>;
  loading: string[];
  errors: Record<string, Error>;
}
const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "loading": {
      if (state.data[action.id]) {
        return state;
      } else if (state.loading.indexOf(action.id) !== -1) {
        return state;
      } else {
        return { ...state, loading: [...state.loading, action.id] }
      }
    }
    case "loaded": {
      const errors = state.errors[action.id] ? omit(state.errors, action.id) : state.errors;
      const data = { ...state.data, [action.id]: action.data }
      const loading = state.loading.filter(x => x !== action.id);
      return {
        data,
        errors,
        loading,
      };
    }
    case "error": {
      const loading = state.loading.filter(x => x !== action.id);
      return {
        ...state,
        errors: { ...state.errors, [action.id]: action.error },
        loading,
      }
    }
  }
}
const initialState: IState = {
  data: {},
  errors: {},
  loading: [],
}
function Row({ id, loading, load, data, error }: { id: string, loading: string[], error?: Error, data?: string, load: (id: string) => void }) {
  const onClick = React.useCallback(() => load(id), [id])
  const isLoading = loading.indexOf(id) !== -1;
  return (
    <tr>
      <td>{id}</td>
      <td>{data}</td>
      <td>{String(isLoading)}</td>
      <td>{error && error.message}</td>
      <td>
        <button onClick={onClick}>Load</button>
      </td>
    </tr>
  );
}
export function AdvancedUseReducer() {
  const [{ loading, errors, data }, dispatch] = React.useReducer(reducer, initialState)
  const count = React.useRef(1);
  const load = React.useCallback(async (id: string) => {
    dispatch({ type: "loading", id })
  }, [])
  React.useEffect(() => {
    loading.map((id)=> {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          dispatch({ type: "loaded", id, data: Math.random().toFixed(2) })
        } else {
          dispatch({ type: "error", id, error: new Error(Math.random().toFixed(2)) })
        }
      }, Math.random() * 1000);
    })
  }, [loading])
  return (
    <div>
      <div>renderCount: {count.current++}</div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>data</th>
            <th>loading</th>
            <th>error</th>
          </tr>
        </thead>
        <tbody>
          {["one", "two", "three"].map((id) => <Row
            key={id}
            id={id}
            load={load}
            loading={loading}
            error={errors[id]}
            data={data[id]}
          />)}
        </tbody>
      </table>
    </div>
  )
}