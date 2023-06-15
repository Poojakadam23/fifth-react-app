

function App() {
  return (
    <>
    <h1>Props demo</h1>

    <MessageDemo message="Hello"/>
    <MessageDemo username="Pooja"/>
    <MessageDemo username="Nikhil"/>
    <MessageDemo username="Pradip"/>

    </>
  );
}
function MessageDemo(props){
  return(
    <>
    <h1>Hello {props.username} </h1>
    </>
  );
}
export default App;
