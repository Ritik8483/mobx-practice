// STEPS TO REPORODUCE
// 1.Paste "useDefineForClassFields": true in tsconfig.json
// 2.Make CountStore first 

import React from "react";
import { useStore } from "../hooks/useStore";
import { observer } from "mobx-react-lite";

const Count = observer(() => {
  const { rootStore } = useStore();
  //   const {
  //     rootStore: { countStore },
  //   } = useStore();

  console.log("rootStore",rootStore);
  

  const handleIncrement = () => {
    rootStore.countStore.increment();
    // countStore.increment();
  };
  const handleDecrement = () => {
    rootStore.countStore.decrement();
  };
  return (
    <div>
      Count:{rootStore.countStore.getCountValue}
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
});

export default Count;
