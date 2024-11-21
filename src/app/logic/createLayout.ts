import { IDesignEditorState } from "../hooks/useDesignEditorState";

export interface ILayoutElement {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
}

export interface ILayout {
  elements: ILayoutElement[];
}

/*
 * creates an absolutely-positioned layout from the state
 */
export function createLayout(state: IDesignEditorState): ILayout {
  const layout: ILayout = {
    elements: state.pages.flatMap((page) =>
      page.children.map((child) => {
        return {
          ...child,
          x: 0,
          y: 0,
          width: 100,
          height: 100,
        };
      })
    ),
  };

  return layout;
}
