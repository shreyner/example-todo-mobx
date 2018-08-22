import * as React from "react";
import { inject, observer } from "mobx-react";
import { TodoFilters } from "../../../store";

export interface FilterLinkProps {
  filter: TodoFilters;
  active: boolean;
  setFilter: (filter: TodoFilters) => void;
  children: any;
}

export function FilterLink({
  filter,
  setFilter,
  active,
  children
}: FilterLinkProps) {
  return (
    <li
      style={{
        cursor: "pointer",
        display: "inline",
        padding: "0 5px",
        textDecoration: active ? "underline" : ""
      }}
      onClick={() => setFilter(filter)}
    >
      {children}
    </li>
  );
}

export default inject(({ todoStore }, ownProps: FilterLinkProps) => ({
  setFilter: todoStore.setFilter,
  active: todoStore.filter === ownProps.filter
}))(observer(FilterLink));
