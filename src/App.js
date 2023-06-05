import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // const name = "Destiny";
  // const myArr = ["one","two","three"];
  // const myObj = {
  //   name : "Destiny",
  //   age : 23
  // };
  // function greeting(){
  //   return "Hello Mello";
  // }

  const myName = "kaung sat";

  const arr =['one','two','three'];

  const x = 10;
  const y = 10;

  return (
    <div>
      <Header user="Kaung Sat" email="kaungsat@gmail.com" password="kaungsat123"/>
      <Header success="Successful text" />
      <Header login="true" />

      <h1 className='react'>Hello React JS</h1>
      <Footer testing="this is testing."/>

      <hr/>

      { 1+1 }
      { myName.toUpperCase() }
      { arr.join("_").toUpperCase() }

      <h1 className={ x === y? "text-success" : "text-danger"}>{ x === y? "This is Right." : "This is Wrong"}</h1>
    </div>
  );
}

export default App;
