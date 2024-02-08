const Item = ({ id, genre, title, createDate, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  }
  return (
    <tr className="Item">
      <td className="idCol">{id}</td>
      <td className="genreCol">{genre}</td>
      <td className="titleCol">{title}</td>
      <td className="createDateCol">{createDate}</td>
      <td>
        <button type="button" onClick={onClickDelete}>삭제</button>
      </td>
    </tr>
  );
};

export default Item;