import { ILayout } from "./createLayout";

interface IPdfCommand {
  command: string;
  args: unknown[];
}

/*
 * todo
 */
export function createPdfCommands(layout: ILayout): IPdfCommand[] {
  const pdfCommands = layout.elements.map(({ x, y, width, height, text }) => {
    return {
      command: "drawString",
      args: [x, y, width, height, text],
    };
  });

  return pdfCommands;
}
