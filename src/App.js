//TEHTÄVÄNANTO VAIHEET:
//1. VALMIS!
//2. KESKEN, klikkaus yliviivaa kaikki nykyiset ja tulevat notet, eikä uudellen klikkaus palauta...
//3. VALMIS!
//4. VALMIS, ongelmana on se, ettei lista päivity vasta kun kirjoittaa jotain inputtiin...
//5. VALMIS!


import './App.css';
import React, {Component, useState} from "react";


function App () {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");
  const [style, setStyle] = useState("eiTehty");

  function addToNotes() {     //Lisää listan(notes) viimeiseksi halutun noten
    if(value === ""){
      alert("Muistiinpano ei voi olla tyhjä!")
    }else{
      let tempArr = notes;
      tempArr.push(value);
      setNotes(tempArr);
      setValue("");
    }

}

  function poistaNote(index) {  //Poistaa valitun noten sen indeksin mukaan
    let temp = notes.filter((item, i) => i !== index);
    setNotes(temp);
  }
  
  function yliviivaaNote(index) {
    //KEKSI RATKAISU!
    setStyle("tehty") //setStylellä klikkaamalla saadaan vaihdettua kaikkien muistiinpanojen luokka, uudestaan klikkaus ei palauta...
    console.log({index});
    }

  function lajittele() {
    //Pelkkä notes.sort() järjestää sen A-Ö, mutta se ei renderöi automaattisesti listaa...
    let temp = notes.sort();
    setNotes([""]);
    console.log(notes);
    setNotes(temp);
    setValue("");

    console.log(notes);
  }


  return (
    <div className="App">
      <h1>ToDo-lista</h1>
      <input type="text" placeholder='Lisää uusi tehtävä...'
        name="note" value={value} 
        onChange={(e) => setValue(e.target.value)}/>
      <button id='lisää' onClick={addToNotes}> + </button>
      <ul className='allNotes'>
        {notes.map((item, i) => <li className={style} id={i} key={i} onClick={() => yliviivaaNote(i)}>{item} 
        <button id='poista' onClick={() => poistaNote(i)}> X </button>
        </li>)}
      </ul>

      <div>
        <button id="lajittele" onClick={lajittele}>Lajittele A-Ö</button>
        <button id="poistakaikki" onClick={() => setNotes([])} >Poista kaikki</button>
      </div>
    </div>
    
  );
}

export default App;
