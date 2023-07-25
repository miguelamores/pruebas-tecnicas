import React from "react";
import { useStore } from "../store";

function Dropdown() {
  const setFilter = useStore((state) => state.setFilter);

  return (
    <div>
      <span className="mr-3">Filter by genre:</span>
      <select onChange={(e) => setFilter(e.target.value)} className="min-w-max">
        <option value="all">All</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </select>
    </div>
  );
}

export default Dropdown;
