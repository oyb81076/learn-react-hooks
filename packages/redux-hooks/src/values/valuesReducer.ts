interface IValues { a: number; b: number; }
const initState: IValues = { a: 1, b: 1 }
// tslint:disable-next-line:interface-name
export interface ValuesAction {
  type: "incr_a_and_double_b";
}
export function valuesReducer(state = initState, action: ValuesAction): IValues {
  switch (action.type) {
    case "incr_a_and_double_b":
      return { a: state.a + 1, b: state.b * 2 };
    default: return state;
  }
}
export function incrAAndDoubleB() {
  return { type: "incr_a_and_double_b" }
}