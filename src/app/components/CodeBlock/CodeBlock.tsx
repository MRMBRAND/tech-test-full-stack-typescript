import styles from "./CodeBlock.module.css";

interface ICodeBlockProps {
  children: unknown;
  title: string;
}

export function CodeBlock({ title, children }: ICodeBlockProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <pre>{JSON.stringify(children, null, 2)}</pre>
    </div>
  );
}
