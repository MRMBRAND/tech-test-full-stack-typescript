import { useCallback, useMemo, useState } from "react";
import {
  IDesignEditorState,
  TAddElementFn,
  TAddPageFn,
} from "../../hooks/useDesignEditorState";
import styles from "./ElementForm.module.css";

interface IElementFormProps {
  state: IDesignEditorState;
  addElement: TAddElementFn;
  addPage: TAddPageFn;
}

export function ElementForm({ state, addElement, addPage }: IElementFormProps) {
  const [text, setNewText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleAddElement = useCallback(() => {
    addElement(pageNumber - 1, { text: text });
  }, [addElement, text, pageNumber]);

  const handleAddPage = useCallback(() => {
    addPage();
  }, [addPage]);

  const pageOptions = useMemo(() => {
    return state.pages.map((_, pageIndex) => {
      const pageNumber = pageIndex + 1;

      return { value: pageNumber, label: `Page ${pageNumber}` };
    });
  }, [state.pages, state.pages.length]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>Add page</h3>
        <button onClick={handleAddPage}>Add page</button>
      </div>
      <div className={styles.section}>
        <h3>Add text element</h3>
        <label>
          Text: &nbsp;
          <input value={text} onChange={(e) => setNewText(e.target.value)} />
        </label>

        <label>
          Page: &nbsp;
          <select
            value={pageNumber}
            onChange={(e) => setPageNumber(Number(e.target.value))}
          >
            {pageOptions.map((o) => (
              <option value={o.value} key={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleAddElement}>Add text element</button>
      </div>
    </div>
  );
}
