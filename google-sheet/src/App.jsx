import { useState } from "react";

function App() {
  const [selectedcell, setSelectedcell] = useState(null);
  const [bgCellMap, setbgCellMap] = useState(new Map());
  const gridRow = 4,
    gridCol = 4;
  const gridArr = Array.from({ length: gridRow }, () =>
    Array.from({ length: gridCol }, () => null),
  );

  function handleInputChange(typedVal) {
    if (typedVal.trim()) {
      setbgCellMap((prev) => {
        const newMap = new Map(prev);
        const obj = newMap.get(selectedcell) || {};
        const updateobj = {
          ...obj,
          text: typedVal,
        };
        newMap.set(selectedcell, updateobj);
        return newMap;
      });
    }
  }

  return (
    <div>
      <div>
        <label>Choose color:</label>
        <select
          onChange={(e) => {
            if (e.target.value && selectedcell) {
              setbgCellMap((prev) => {
                const temp = new Map(prev);
                const obj = temp.get(selectedcell) || {};
                const updateobj = {
                  ...obj,
                  color: e.target.value,
                };
                temp.set(selectedcell, updateobj);
                return temp;
              });
            }
          }}
        >
          <option value="">--Please choose an option--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      {gridArr.map((gridRow, i) => {
        return (
          <div key={i}>
            {gridRow.map((_, j) => {
              const uniqueId = `${i}-${j}-id`;
              const cell = bgCellMap.get(uniqueId);
              return (
                <input
                  key={uniqueId}
                  type="text"
                  value={cell?.text}
                  onClick={() => setSelectedcell(uniqueId)}
                  onMouseDown={(e) => e.preventDefault()}
                  style={{
                    backgroundColor: cell?.color,
                    border: selectedcell === uniqueId ? "2px solid blue" : "",
                  }}
                  onDoubleClick={(e) => e.target.focus()}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default App;
