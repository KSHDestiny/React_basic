import "./Event.css";

function Event(){

    const clickEvent = ()=> {
        console.log("Hello Code Lab");
    }

    const paraEvent = (para)=> console.log(`Your Test is ${para}`);

    return(
        <>
            <button onClick={ clickEvent }>Click Me</button>
            {/* <button onClick={ paraEvent("Kaung Sat") }>Para Click Me</button> */}

            <button onClick={ function(){clickEvent()} }>Click Me</button>
            <button onClick={ function(){paraEvent("Kaung Sat")}  }>Para Click Me</button>
            <button onClick={ () => paraEvent("Kaung Sat")  }>Para Click Me</button>
        </>
    )
}

export default Event;

// <button onClick="function()"></button>