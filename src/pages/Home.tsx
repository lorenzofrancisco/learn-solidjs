import { createEffect, createSignal, For } from "solid-js";
import { sharps } from "../App";
import MyPagination from "../components/MyPagination";
import SharpCard from "../components/SharpCard";
import styles from "./Home.module.css";
import type { Component } from "solid-js";

const [offset, setOffset] = createSignal(0);
const [limit, setLimit] = createSignal(10);
const [page, setPage] = createSignal(1);
const [pages, setPages] = createSignal([]);
const [total, setTotal] = createSignal(0);

const Home: Component = () => {
  createEffect(() => {
    setTotal(sharps().length);
    let totalPages = Math.ceil(sharps().length / limit());
    const pageArray: [number?] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageArray.push(i);
    }
    setPages(pageArray);
  });
  return (
    <>
      <div>
        <h2>List of SHARP Projects</h2>
        <div class={styles.pagination}>
          <MyPagination />
        </div>
      </div>
      <For each={sharps().slice(offset(), offset() + limit())}>
        {(sharp) => <SharpCard sharp={sharp} />}
      </For>
    </>
  );
};

export { offset, limit, setOffset, setLimit, page, pages, setPage, total };

export default Home;
