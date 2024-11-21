"use client";
import { useEffect, useMemo } from "react";
import {
  IDesignEditorState,
  useDesignEditorState,
} from "./hooks/useDesignEditorState";
import styles from "./page.module.css";
import { createLayout } from "./logic/createLayout";
import { createPdfCommands } from "./logic/createPdfCommands";
import { CodeBlock } from "./components/CodeBlock/CodeBlock";
import { ElementForm } from "./components/ElementForm/ElementForm";

const initialState: IDesignEditorState = {
  pages: [
    {
      children: [
        { text: "Hello, world!" },
        { text: "Hi there" },
        { text: "This is a third text element" },
      ],
    },
  ],
};

export default function Home() {
  const { state, setState, addElement, addPage } = useDesignEditorState();

  useEffect(() => {
    setState(initialState);
  }, [setState]);

  const layout = useMemo(() => createLayout(state), [state]);

  const pdfCommands = useMemo(() => createPdfCommands(layout), [layout]);

  return (
    <div>
      <div className={styles.row}>
        <ElementForm state={state} addElement={addElement} addPage={addPage} />
      </div>
      <div className={styles.row}>
        <CodeBlock title="State">{state}</CodeBlock>
        <CodeBlock title="Layout">{layout}</CodeBlock>
        <CodeBlock title="PDF Commands">{pdfCommands}</CodeBlock>
      </div>
    </div>
  );
}
