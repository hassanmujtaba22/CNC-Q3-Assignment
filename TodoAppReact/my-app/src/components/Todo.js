import React from "react"
const Todo = (props) => {
    return(
      <div className="list-group-item">
          <table>
              <tr>
                  <td className="items">{props.content}</td>
                  <td className="dlt-btn"><button class="btn btn-danger" onClick={() => {props.onDelete(props.id)}}>Delete</button></td>
              </tr>
          </table>
      </div>
    );
  }

  export default Todo