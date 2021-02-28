export const CompleteTodos = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <>
      <div className="complete-area">
        <div>
          <p className="title">完了のTODO</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClick(index)}>戻る</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
