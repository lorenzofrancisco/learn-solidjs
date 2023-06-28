import { Col, Container, Form, Pagination, Row} from "solid-bootstrap";
import { For, Show } from "solid-js";
import {
    limit,
    offset,
    page,
    pages,
    setLimit,
    setOffset,
    setPage,
    total
} from "../pages/Home"
import styles from "./Pagination.module.css"
import { preview } from "vite";
import { nextHydrateContext } from "solid-js/types/render/hydration";
import type { Component } from "solid-js";

const MyPagination: Component = () => {
    const prev = () => {
        if (page() > 1) {
            setOffset(offset() - limit());
            setPage(page() - 1);
        }
    };
    const next = () => {
        setOffset(offset() + limit());
        setPage(page() + 1);
    };

    return (
        <>
            <Container>
                <Row>
                    <Pagination.Prev
                    onclick={() => {
                        prev();
                    }}
                    />
                    <Pagination.Next
                    onclick={() => {
                        next();
                    }}
                    />
                </Row>
            </Container>
        </>
    );
};

export default MyPagination
