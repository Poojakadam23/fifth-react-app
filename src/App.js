import { useRef,useState } from "react";


function App() {
  return (
    <>
    <h1>stateful list</h1>
    <ListDemo />

    </>
  );
}
function ListDemo(){
  let inputRef=useRef();
  let [list,setList] =useState(["delhi"]);

  let addItemAction=() => {
    let inputValue=inputRef.current.value;
    let newList = [inputValue,...list];
    setList(newList);
    inputRef.current.value="";
  };

  return(
    <>
    <input type="text" id="id1"ref={inputRef}placeholder="Enter user input..."/>
    <input type="button"value="Add New Item" onClick={addItemAction}/>
    
    
    {list.map((item)=>(<><h1>
      {item}
    </h1></>
    ))}
  </>
  );
}
export default App;
