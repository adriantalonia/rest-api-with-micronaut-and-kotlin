import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">name</th>
            </tr>
          </thead>
          <tbody>
            <TodoRowItem/>
            <TodoRowItem/>
            <tr>
              <th scope="row">2</th>
              <td>test</td>
              <td>Adrian</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
