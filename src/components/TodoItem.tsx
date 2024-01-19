type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

const TodoItem = ({ id, title, complete }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={complete} />
      <p>{title}</p>
    </li>
  );
};

export default TodoItem;
