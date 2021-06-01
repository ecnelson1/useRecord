import {useState, useEffect} from 'react'

export const useRecord = (init) => {
  const [currentColor, setCurrentColor] = useState(init);
  const [colorRecords, setColorRecords] = useState(init);
  const [colorIndex, setColorIndex]= useState(0);

  useEffect(()=>{
      setColorIndex(colorRecords.indexOf(currentColor));
  }, [currentColor]);

  const record = (newColor) => {
      setColorRecords(prevArr => [...prevArr.slice(0, colorIndex + 1),
    newColor,
    ...prevArr.slice(colorIndex + 1)]);
    setCurrentColor(newColor);
  };

  const undo = () => {
      setCurrentColor(colorRecords[colorIndex -1 ]);
  };

  const redo = () => {
      setCurrentColor(colorRecords[colorIndex+ 1 ]);
  };

  return {
      currentColor,
      colorRecords,
      colorIndex,
      record,
      undo,
      redo
  };
};
