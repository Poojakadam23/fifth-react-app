

function App() {
  return (
    <>
    <h1>Props demo</h1>

    <MessageDemo username="Pinky"/>
    <MessageDemo username="Pooja" email="P@gmail.com"/>
    <MessageDemo username="Nikhil"email="N@gmail.com"/>
    <MessageDemo username="Pradip"email="G@gmail.com"/>

    </>
  );
}
function MessageDemo({email,username}){
  return(
    <>
    <h1>Hello {username} {email} </h1>
    </>
  );
}
export default App;
