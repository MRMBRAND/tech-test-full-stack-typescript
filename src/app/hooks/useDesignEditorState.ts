import { useState } from "react";

export interface IElement {
  text: string;
}

export interface IPage {
  children: IElement[];
}

export interface IDesignEditorState {
  pages: IPage[];
}

export type TAddElementFn = (pageIndex: number, element: IElement) => void;
export type TAddPageFn = () => void;

export interface IDesignEditorStateHook {
  state: IDesignEditorState;
  setState: (state: IDesignEditorState) => void;
  addPage: TAddPageFn;
  addElement: TAddElementFn;
}

export function useDesignEditorState(): IDesignEditorStateHook {
  const [state, setState] = useState<IDesignEditorState>({ pages: [] });

  function addPage() {
    const newState = { ...state };

    newState.pages.push({ children: [] });

    setState(newState);
  }

  function addElement(pageIndex: number, element: IElement) {
    const newState = { ...state };

    newState.pages[pageIndex].children.push(element);

    setState(newState);
  }

  return { state, setState, addPage, addElement };
}
