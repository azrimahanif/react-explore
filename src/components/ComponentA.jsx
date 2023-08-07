import { useState } from "react";

const ComponentA = ({countA}) => {

    //Immutability 
    const [isLapar, setIsLapar] = useState(true);
    const handleButton = ()=> {alert("nyam nyam nyam");
    setIsLapar(false);};
    const [nama, setNama] = useState ("");
    const handlerInput = (event) =>{

        setNama(event.target.value);
        console.log(nama);

    };




    return (
        <div style={{display: "flex", gap: 16, flexDirection: "column"}}>
            <p>Nombor counting daripada APP : {countA}  </p>
            Lapar Ke? {isLapar.toString()}
            <button onClick={handleButton}>MAKAN</button>
            <input style={{padding: "16px 32px"}} name="nama" value={nama} 
            //function call by reference
            // onChange={handlerInput}
            onChange={(event) => handlerInput(event)}
            ></input>    
        </div>);
};


export default ComponentA;