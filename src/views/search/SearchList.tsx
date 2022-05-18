import React from "react";

interface Project {
  id: string;
  name: string;
}
interface SearchListProps {
  list: Project[];
}
export const SearchList = ({ list }: SearchListProps) => {
  const LiArr = list.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });
  return (
    <div>
      <ul>{LiArr}</ul>
    </div>
  );
};
