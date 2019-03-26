import React from "react";

class Todo extends React.Component {
  render() {
    let func = this.props;
    return (
      <div className="todoMain">
        {this.props.data.map(function(dat) {
          if (dat.complete === "yes") {
            return (
              <div key={dat.task}>
                <input
                  type="checkbox"
                  className="mr-1"
                  defaultChecked = {true}
                  onClick={e => {
                    e.preventDefault();
                    func.handleUpdate(dat.id);
                  }}
                />
                {dat.task}
                <span className="badge badge-pill badge-secondary float-right">
                  complete
                </span>
              </div>
            );
          } else {
            return (
              <div key={dat.task}>
                <input
                  type="checkbox"
                  className="mr-1"
                  defaultChecked ={false}
                  onClick={e => {
                    e.preventDefault();
                    func.handleUpdate(dat.id);
                  }}
                />
                {dat.task}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Todo;
