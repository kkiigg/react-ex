import React from "react";

type User = {
  id: number;
  name: string;
};
interface SearchPanelProps {
  users: User[];
  setParams: (params: SearchPanelProps["params"]) => void;
  params: {
    name: string;
    posiId: string;
  };
}
export const SearchPanel = ({ params, users, setParams }: SearchPanelProps) => {
  const UserOptions = users?.map((item) => (
    <option id={String(item.id)} key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
  return (
    <div>
      <input
        type="text"
        onChange={($e) =>
          setParams({
            ...params,
            name: $e.target.value,
          })
        }
      />
      <select
        onChange={($e) =>
          setParams({
            ...params,
            posiId: $e.target.value,
          })
        }
      >
        <option value={0}></option>
        {UserOptions}
      </select>
      <button>button</button>
    </div>
  );
};
