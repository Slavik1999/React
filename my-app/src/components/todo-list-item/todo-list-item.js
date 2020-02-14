import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      done,
      important,
      onToggleDone,
      onImportant
    } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    let classNames = "todo-list-item";

    if (important) {
      classNames += " important";
    }

    if (done) {
      classNames += " done";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={onToggleDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" onClick={onImportant} />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// const TodoListItem = ({ label, important = false }) => {
// 	const onClick = (param) => {
// 		alert(param);
// 	};

// 	return (
// 		<span className='todo-list-item'>
// 			<span className='todo-list-item-label' style={style} onClick={() => onClick('asd')}>
// 				{label}
// 			</span>

// 			<button type='button' className='btn btn-outline-success btn-sm float-right'>
// 				<i className='fa fa-exclamation' />
// 			</button>
// 			<button type='button' className='btn btn-outline-danger btn-sm float-right'>
// 				<i className='fa fa-trash-o' />
// 			</button>
// 		</span>
// 	);
// };

export default TodoListItem;
