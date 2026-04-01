import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [personList, setPersonList] = useState(new Array());
  const [assignbuttonClick, setAssignButtonClick] = useState(false);

  console.log(personList);

  const giftsAssignArr = [
    "Decoration",
    "Sweets",
    "crackers",
    "rangoli colours",
    "clothes colorful",
    "gifts cards",
    "hampers/chocolates",
  ];

  const handleAddPerson = () => {
    const personName = inputRef.current.value;
    setPersonList((prev) => {
      const newArr = [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: personName,
          gift: "No gift Assign yet",
        },
      ];
      return newArr;
    });
    inputRef.current.value = null;
  };
  const pickRandomGift = () => {
    return giftsAssignArr[Math.floor(Math.random() * giftsAssignArr.length)];
  };
  const randomassignGift = () => {
    const newArr = personList.map((person) => {
      return { ...person, gift: pickRandomGift() };
    });
    setPersonList(newArr);
  };

  const handleAssignGifts = () => {
    if (assignbuttonClick)
      return alert("please use shuffle to shuffle the gifts");
    setAssignButtonClick(true);
    randomassignGift();
  };
  const handleShufleGifts = () => {
    if (!assignbuttonClick)
      return alert("please use assign gift to assign shifts");
    randomassignGift();
  };
  const handleReset = () => {
    const newArr = personList.map((person) => {
      return { ...person, gift: "No gift Asign Yet" };
    });
    setPersonList(newArr);
  };
  const handleRemove = (person_id) => {
    const filterPersonList = personList.filter(
      (person) => person.id !== person_id,
    );
    setPersonList(filterPersonList);
  };
  return (
    <div>
      <div>
        <input ref={inputRef} type="string" placeholder="person name" />
        <button onClick={handleAddPerson}>Add Person</button>
      </div>
      {personList?.map((person) => {
        return (
          <div class="person-container" key={person.id}>
            <span>{person.name}</span>
            <div>Gift: {person.gift}</div>
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </div>
        );
      })}
      {personList?.length > 0 && (
        <div class="person-container">
          <button onClick={handleAssignGifts}>Assign Gifts</button>
          <button onClick={handleShufleGifts}>Shuffle Gifts</button>
          <button onClick={handleReset}>Reset Gifts</button>
        </div>
      )}
    </div>
  );
}
export default App;
