import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Event from './components/Event';

function App() {

  return(
    <>
    { 
      1 == 10? 
      <>
        <Header/>
        <h1>This is Right Text</h1>
      </>
      :   
      <>
         <Footer></Footer>
         <h1>This is Wrong Text</h1>
       </>
    }
    </>
  )

  // if( 2 == 2){
  //   return(
  //     <>
  //       <Header></Header>
  //       <h1>This is Right Text</h1>
  //     </>
  //   )
  // }else{
  //   return(
  //     <>
  //       <Footer></Footer>
  //       <h1>This is Wrong Text</h1>
  //     </>
  //   )
  // }


}

export default App;
