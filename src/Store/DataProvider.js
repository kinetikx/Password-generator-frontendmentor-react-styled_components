import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const options = [
    { name: "Include Uppercase Letters", number: 1, tick: false },
    { name: "Include Lowercase Letters", number: 2, tick: false },
    { name: "Include Numbers", number: 3, tick: false },
    { name: "Include Symbols", number: 4, tick: false },
  ];
  let strenghtt = { color: "asd",name: "asd",level: [false,false,false,false]};
  let tickCountt = 0;


  const [data, setData] = useState(options); // Alternativeoptions.js için gönderilecek değer
  const [tickCount, setTickCount] = useState(0);
  const [value, setValue] = useState(0); // Rangeinput.js'den alınan değer
  const [strenght, setStrenght] = useState(); // Strenght.js için gönderilecek değer
  const [strenghtVariable, setStrenghtVariable] = useState(strenghtt); // Strenght.js içine gidecek değer



  //data Alternativeoptions.js'ye gönderilip orada set ediliyor ve yeni data oluşturuluyor.
  //bu datada kaç tane seçili tick olduğu belirlenip tickcountt değişkenine kaydediliyor
  //sonra Rangeinput.js den alınan value değeri bu tikcountt değeri ile çarpılıp strenght oluşturuluyor.
  //en sonunda bu strenght değerini belli aralıklarda red - orange- yellow - green döndüren bir koşul ifadesi yazıp bu değeri state aracılığı ile göndereceyiz
  // Kırmızı ==>>TOO WEAK
  // Orange ==>> WEAK
  // Yellow ==>> MEDİUM
  // GREEN ==>> STRONG
  const calculateStrenght = () => {
    tickCountt = data.filter((option) => option.tick === true).length;

    setStrenght(value * tickCountt);



if (strenght >= 10 && strenght < 20) {
  strenghtt = {
    color: "#f4615a",
    name: "TOO WEAK",
    level: [true,false,false,false]
  };
} else if (strenght >= 20 && strenght < 40) {
  strenghtt = {
    color: "#fb7a56",
    name: "WEAK",
    level: [true,true,false,false]

  };
} else if (strenght >= 40 && strenght < 60) {
  strenghtt = {
    color: "#f8cb63",
    name: "MEDIUM",
    level: [true,true,true,false]
  };
} else if (strenght >= 60 && strenght <= 80) {
  strenghtt = {
    color: "#a3ffae",
    name: "STRONG",
    level: [true,true,true,true]
  };
} else {
  strenghtt = {
    color: "transparent",
    name: "UNKNOWN",
    level: [false,false,false,false]
  };
}
setStrenghtVariable(strenghtt)



  };

  useEffect(() => {
    calculateStrenght();
  }, [data, value, strenght]);

  return (
    <DataContext.Provider value={{ data, setData, value, setValue, strenght,  strenghtVariable }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
