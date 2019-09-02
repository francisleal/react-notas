import React, { Component } from 'react';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: ["Go to the store", "Wash the dishes", "Learn some code"]
//         };
//         this.addItem = this.addItem.bind(this);
//         this.removeItem = this.removeItem.bind(this);
//     }

//     addItem(e) {
//         // Prevent button click from submitting form
//         e.preventDefault();

//         // Create variables for our list, the item to add, and our form
//         let list = this.state.list;
//         const newItem = document.getElementById("addInput");
//         const form = document.getElementById("addItemForm");

//         // If our input has a value
//         if (newItem.value !== "") {
//             // Add the new item to the end of our list array
//             list.push(newItem.value);
//             // Then we use that to set the state for list
//             this.setState({
//                 list: list
//             });
//             // Finally, we need to reset the form
//             newItem.classList.remove("is-danger");
//             form.reset();
//         } else {
//             // If the input doesn't have a value, make the border red since it's required
//             newItem.classList.add("is-danger");
//         }
//     }

//     removeItem(item) {
//         // Put our list into an array
//         const list = this.state.list.slice();
//         // Check to see if item passed in matches item in array
//         list.some((el, i) => {
//             if (el === item) {
//                 // If item matches, remove it from array
//                 list.splice(i, 1);
//                 return true;
//             }
//         });
//         // Set state to list
//         this.setState({
//             list: list
//         });
//     }

//     render() {
//         return (
//             <div className="content">
//                 <div className="container">
//                     <section className="section">
//                         <List items={this.state.list} delete={this.removeItem} />
//                     </section>
//                     <hr />
//                     <section className="section">
//                         <form className="form" id="addItemForm">
//                             <input
//                                 type="text"
//                                 className="input"
//                                 id="addInput"
//                                 placeholder="Something that needs ot be done..."
//                             />
//                             <button className="button is-info" onClick={this.addItem}>
//                                 Add Item
//                 </button>
//                         </form>
//                     </section>
//                 </div>
//             </div>
//         );
//     }
// }

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Estão indo:
              <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Número de convidados:
              <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filtered: []
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // componentDidMount() {
    //     this.setState({
    //         filtered: this.props.items
    //     });
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         filtered: nextProps.items
    //     });
    // }

    // handleChange(e) {
    //     let currentList = [];

    //     let newList = [];

    //     if (e.target.value !== "") {

    //         currentList = this.props.items;

    //         newList = currentList.filter(item => {

    //             const lc = item.toLowerCase();

    //             const filter = e.target.value.toLowerCase();

    //             return lc.includes(filter);
    //         });
    //     } else {
    //         newList = this.props.items;
    //     }

    //     this.setState({
    //         filtered: newList
    //     });
    // }

    // render() {
    //     return (
    //         <div>
    //             <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
    //             <ul>
    //                 {this.state.filtered.map(item => (
    //                     <li key={item}>

    //                         <span onClick={() => this.props.delete(item)}>{item} </span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     )
    // }
}

export default List;