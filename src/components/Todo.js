import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeAllItem } from "../actions/index";
import "../App.css";

export default function Todo() {
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);

    return (
        <div className="App">
            <header className="App-header">
                <h3 className="my-3">Add Your List Here 👌</h3>
                <div className="input-group mb-3 w-25">
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Add Item 🖊️"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    {/* <i className="fa fa-plus add-btn"></i> */}
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => dispatch(addItem(inputData), setInputData(""))}
                    >
                        +
                    </button>
                </div>

                {list.map((element) => {
                    return (
                        <div className="w-25 bg-secondary mb-2">
                            <div className="" key={element.id}>
                                <p className="float-start d-inline px-3 py-2 text-wrap">
                                    {element.data}
                                </p>
                                <i
                                    type="button"
                                    className=" far fa-trash-alt add-btn m-3 float-end btn btn-light"
                                    onClick={() => dispatch(deleteItem(element.id))}
                                ></i>
                            </div>
                        </div>
                    );
                })}

                <button
                    type="button"
                    className="  m-3 float-end btn btn-danger"
                    onClick={() => dispatch(removeAllItem())}
                >Remove All</button>
            </header>
        </div>
    );
}
