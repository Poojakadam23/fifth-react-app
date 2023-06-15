

function App() {
  return (
    <>
    <h1>Props demo</h1>
    <ListDemo />

    </>
  );
}
function ListDemo(){
  let data = "Hello Universe";
  let list = ["delhi", "calcutta", "chennai"];

  return(
    <>
    
    <h1>{data}</h1>
    {list.map((item)=>(<><h1>
      Hello World
    </h1></>
    ))}
  </>
  );
}
export default App;
