import React from "react";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { EditMode: null, checked: null };
  }

  handleTodoCheck = id => {
    this.setState({
      checked: id
    });
  };

  render() {
    let thisProp = this.props;
    return (
      <div className="todoMain">
        {this.props.data.map(dat => {
          return (
            <div key={dat.id}>
              <input
                type="checkbox"
                checked={
                  this.state.checked === dat.id || dat.checked === true
                    ? true
                    : false
                }
                onClick={e => {
                  e.preventDefault();
                  thisProp.handleUpdate(dat.id);
                }}
                onChange={e => {
                  e.preventDefault();
                  this.handleTodoCheck(dat.id);
                }}
              />
              {thisProp.inEditMode === null ||
              dat.id !== thisProp.inEditMode ? (
                <span>
                  <span>{dat.task}</span>
                  <span className="float-right">
                    <button
                      className="btn btn-info mr-1"
                      onClick={e => {
                        e.preventDefault();
                        thisProp.taskEdit(dat.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={e => {
                        e.preventDefault();
                        thisProp.handleDelete(dat.id);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </span>
              ) : (
                <span>
                  <form>
                    <input
                      type="text"
                      placeholder={dat.task}
                      onChange={e => {
                        e.preventDefault();
                        thisProp.taskChange(e.target.value);
                      }}
                    />
                    <span className="float-right">
                      <button
                        className="btn btn-info  align-top mr-1"
                        onClick={e => {
                          e.preventDefault();
                          thisProp.taskUpdate(dat.id);
                        }}
                      >
                        update
                      </button>
                      <button
                        className="btn btn-danger edit"
                        onClick={e => {
                          e.preventDefault();
                          thisProp.removeId(dat.id);
                        }}
                      >
                        Cancle
                      </button>
                    </span>
                  </form>
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
