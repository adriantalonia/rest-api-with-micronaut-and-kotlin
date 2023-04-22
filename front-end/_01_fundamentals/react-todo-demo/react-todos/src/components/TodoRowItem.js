function TodoRowItem() {
  const rowNUmer = 1;
  const rowDescription = "test 1";
  const rowAssigned = "Adrian";

  return (
    <tr>
      <th scope="row">{rowNUmer}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
