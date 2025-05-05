import { PropsWithChildren } from "react";
import styles from "./ExpandableWrapper.module.css";

const ExpandableWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${styles.expandable} ${styles.animate}`}>{children}</div>
  );
};

export default ExpandableWrapper;
