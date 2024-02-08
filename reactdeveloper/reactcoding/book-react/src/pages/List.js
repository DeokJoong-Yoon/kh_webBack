import Item from "./Item";

const List = ({ book, onDelete }) => {
  return (
    <div className="List">
      <h1>책정보 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>장르</th>
            <th>책제목</th>
            <th>출간일</th>
          </tr>
        </thead>
        <tbody>
          {book.map((it) => (
            <Item key={it.id} {...it} onDelete={onDelete}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
