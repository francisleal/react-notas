import React, { Component } from 'react';
import List from './List';

class Senhas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["Go to the store", "Wash the dishes", "Learn some code"]
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();

        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");

        if (newItem.value !== "") {

            list.push(newItem.value);

            this.setState({
                list: list
            });

            newItem.classList.remove("is-danger");
            form.reset();
        } else {

            newItem.classList.add("is-danger");
        }
    }

    removeItem(item) {

        const list = this.state.list.slice();

        list.some((el, i) => {
            if (el === item) {

                list.splice(i, 1);
                return true;
            }
            return true
        });

        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <List items={this.state.list} delete={this.removeItem} />
                    </section>
                    <hr />
                    <section className="section">
                        <form className="form" id="addItemForm">
                            <input
                                type="text"
                                className="input"
                                id="addInput"
                                placeholder="Something that needs ot be done..."
                            />
                            <button className="button is-info" onClick={this.addItem}>
                                Add Item
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <header>
    //                 <p>Senhas</p>
    //             </header>
    //         </div>
    //     );
    // }
}

export default Senhas;