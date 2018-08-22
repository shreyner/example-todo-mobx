import * as React from "react";
import { inject, observer } from "mobx-react";
import { TodoFilters } from "../../store";
import FilterLink from "./FilterLink/FilterLink";

const FilterTitles = {
  [TodoFilters.ALL]: "All",
  [TodoFilters.ACTIVE]: "Actice",
  [TodoFilters.COMPLETED]: "Completed"
};

export interface FiltersProps {
  setFilter: (filter: TodoFilters) => void;
}

export function Filters({ setFilter }: FiltersProps) {
  return (
    <div>
      <div>Filtes:</div>
      <ul>
        {[TodoFilters.ALL, TodoFilters.ACTIVE, TodoFilters.COMPLETED].map(
          filter => (
            <FilterLink filter={filter}>{FilterTitles[filter]}</FilterLink>
          )
        )}
      </ul>
    </div>
  );
}

export default inject(({ todoStore }) => ({
  setFilter: todoStore.setFilter
}))(observer(Filters));
