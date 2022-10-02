import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { up, inputs, todoCreate, todoDelete } from "./store";

const TodoCreate = () => {
  const num = useRef(1)
  const { cnum, todoItm } = useSelector(it => it);
  const dispatch = useDispatch();


  const handlerInputs = (e) => {
    const { name, value } = e.target;
    dispatch(inputs({ ...todoItm, id: num.current, [name]: value }));

  }

  const handlerList = () => {
    dispatch(todoCreate([todoItm]));
    num.current += 1;

  }
  return (
    <>
      <div>{cnum}</div>
      <button onClick={() => dispatch(up())}>+</button>
      <input onChange={handlerInputs} name='tit' />
      <input onChange={handlerInputs} name='coment' />
      <button onClick={handlerList}>WRITE</button>
    </>

  )
}

const TodoList = () => {
  const { todoList } = useSelector(it => it);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{todoList.length}</h2>
      {
        todoList.map(it => {
          return (
            <div key={it.id}>
              {it.tit}   /   {it.coment}
              <button onClick={
                () => {
                  dispatch(todoDelete(it.id));
                }
              }>X</button>

            </div>
          )
        })
      }
    </div>
  )

}

function App() {

  return (
    <div className="App">
      <TodoList />
      <TodoCreate />
    </div>
  );
}

export default App;
