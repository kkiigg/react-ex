import React from "react";
import { SearchPanel } from "./SearchPanel";
import { SearchList } from "./SearchList";
import { useState, useEffect } from "react";
import { fetchData } from "../../util/fetch";
// import {JSX} from 'react'

export const ListPage = () => {
  const [list, setList] = useState([]);
  const [params, setParams] = useState({
    name: "",
    posiId: "",
  });
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let res: any = await fetchData("http://localhost:3004/user");
    setUsers(res);
  }
  async function getList() {
    let query = `?`;
    let arr: string[] = [];
    if (params.name) {
      arr.push("name=" + params.name);
    }
    if (params.posiId) {
      arr.push("userid=" + params.posiId);
    }
    query += arr.join("&");
    let res: any = await fetchData("http://localhost:3004/project" + query);
    setList(res);
  }
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    getList();
  }, [params]);

  return (
    <>
      <SearchPanel
        params={params}
        users={users}
        setParams={setParams}
      ></SearchPanel>
      <SearchList list={list}></SearchList>
    </>
  );
};
