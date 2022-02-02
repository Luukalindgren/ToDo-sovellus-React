//TODO:
//1. VALMIS!
//2. VALMIS!
//3. VALMIS! KORJATTAVA YHTEENSOPIVAKSI YLIVIIVAUKSEN KANSSA!
//4. VALMIS!
//5. VALMIS!


import './App.css';
import React, {useState} from "react";


function App () {
  const [notes, setNotes] = useState(["Tässä todo -sovelluskessa on vikoja joille en keksinyt ratkaisua...","Lajittelu ja tehdyksi merkkaus ei uudelleen renderöi listaa...","Syötekenttään tarvitsee laittaa jokin merkki renderöityäkseen.", "Tehdyksi merkkauksen poisto ei toimi oikein..."]);
  const [value, setValue] = useState("");
  const [tehdyt, setTehdyt] = useState([]);

  function addToNotes() {     //Lisää listan(notes) viimeiseksi halutun noten
    if(value === ""){
      alert("Muistiinpano ei voi olla tyhjä!")
    }else{
      let temp = notes;
      temp.push(value);
      setNotes(temp);
      setValue("");
    }
}

  function poistaNote(index) {  //Poistaa valitun noten sen indeksin mukaan
    let temp = notes.filter((item, i) => i !== index);
    setNotes(temp);
    let temp2 = tehdyt.filter((item) => item !== index); //Poistaa poistettavan listauksen indexin tehdyistä
    setTehdyt(temp2);
    //KORJATTAVAA ON YLIVIIVAUKSEN SIIRTO, NYT KUN POISTAA JONKUN, NIIN YLIVIIVAUS PYSYY SAMASSA INDEKSISSÄ, VAIKKA PITÄISI PIENENTYÄ YHDELLÄ/POISTUA!
    //Eli jotenkin: temp[i] === (tehdyt[i] - 1)  =>  setTehdyt(temp); Mutta vain indekseiltä jotka ovat isompia kuin poistettava!!!

  }
  
  function yliviivaaNote(index) {
    //Jos tehdyt -listassa on jo tämä tehdyn indexi, se poistetaan, jolloin kyseisen yliviivauspoistuu
    if (tehdyt.includes(index)) {
      let temp = tehdyt.filter((item) => item !== index);
      setTehdyt(temp);
    } //Jos ei ole, niin tehdyt -listaan lisätään indexi, jolloin sen tyyliin tulee yliviivaus lisää.
    else {
      let temp = tehdyt;
      temp.push(index);
      setTehdyt(temp);
    }
  }

  function lajittele() {     
    setNotes(notes.sort());
    // JOSTAIN SYYSTÄ INPUTTIIN PITÄÄ LAITTAA JOKIN SYMBOLI ENNENKUIN LISTA PÄIVITTYY
  }

  function poistaKaikki() {
    setNotes([]);
    setTehdyt([]); //Yliviiaukset poistuu ettei ne tule uusiin merkintöihin mukaan
  }


  return (
    <div className="App">
      <h1>ToDo-lista</h1>
      <input type="text" placeholder='Lisää uusi tehtävä...'
        name="note" value={value} 
        onChange={(e) => setValue(e.target.value)}/>
      <button id='lisää' onClick={addToNotes}> + </button>
      <ul className='allNotes'>
        {notes.map((item, i) => <li  className={tehdyt.includes(i) ? 'tehty' : ''} id={i} key={i} >{item}   
        {/* ClassName vaihtuu jokaiselle listan alkiolle, riippuen kuuluuko niiden indeksi tehdyt -listaan */}
        <button id='yliviivaa' onClick={() => yliviivaaNote(i)}> ✓ </button>
        <button id='poista' onClick={() => poistaNote(i)}> X </button>
        </li>)}
      </ul>
      <div>
        <button id="lajittele" onClick={lajittele} >Lajittele A-Ö</button>
        <button id="poistakaikki" onClick={poistaKaikki} >Poista kaikki</button>
      </div>
    </div>
    
  );
}

export default App;
