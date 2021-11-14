import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";
import FilterandSearch from "./Components/FilterandSearch";

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    price: "",
    quantity: "",
    date: "",
  });
  const [nameTypes, setNameTypes] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  //Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/lentele")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  //FilterBy name React
  useEffect(() => {
    if (filterBy) {
      axios
        .get("http://localhost:3003/lentele-filter/" + filterBy)
        .then((res) => {
          setTable(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [filterBy]);

  //Distinct names React
  useEffect(() => {
    axios
      .get("http://localhost:3003/lentele-name")
      .then((res) => {
        setNameTypes(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  //Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/lentele/" + id, item)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  //Delete React
  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/lentele/" + id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  //Create React
  const create = (item) => {
    axios.post("http://localhost:3003/lentele", item).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const modal = (item) => {
    setShowModal(true);
    setModalInputs(item);
  };

  const hide = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <Create create={create} />
          <FilterandSearch nameTypes={nameTypes} setFilterBy={setFilterBy} />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">List of X</div>
              <div className="card-body">
                <table className="table">
                  <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>date</th>
                  </tr>
                  <Modal
                    showModal={showModal}
                    modalInputs={modalInputs}
                    hide={hide}
                    edit={edit}
                    remove={remove}
                  />
                  <List table={table} modal={modal} remove={remove} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
