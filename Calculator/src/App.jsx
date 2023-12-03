import React from "react";

export const App = () => {
  const arrNum = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div>
      {arrNum.map((e, i) => {
        return <button>{e}</button>;
      })}
    </div>
  );
};
export default App