import styles from "./ListRow.module.css";

const ListCell = ({
  children,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
  row, col
}) => {
  return (
    <tr
      className={styles.cell}
      onClick={() => {
        setSelectedOrderDetails(row.executionDetails);
        setSelectedOrderTimeStamps(col.timestamps);
      }}
    >
      {children}
    </tr>
  );
};

export default ListCell;
