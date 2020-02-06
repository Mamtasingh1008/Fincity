import React, { Component } from 'react';
import { FormGroup, FormControl, Button, } from 'react-bootstrap';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };

    }
    // NameRef = React.createRef();
    // PhoneRef = React.createRef();
    AddressRef = React.createRef();

    handleClick = (event) => {

        console.log("Address:" + this.AddressRef.current.value);
        

    }


    render() {
        // eslint-disable-next-line
        //const { className, label } = this.props;
        //let { items } = this.state;
        console.log(this.props)




        let dataItems = this.state.items.map((item) => {
            return (
                <React.Fragment>
                    <div key={item.id}>
                        {item.label}
                    </div>
                    <div key={item.id}>
                        {item.value}
                    </div>
                    <FormGroup key={item.id} ref={this.NameRef}>

                        <FormControl Inputtype={item.type} name={item.label} placeholder={item.label} ref={this.AddressRef} />

                    </FormGroup>
                </React.Fragment>

            )
        })
        return (

            <React.Fragment>

                {dataItems}
                <Button className="Primary" onClick={this.handleClick}> Submit </Button>


            </React.Fragment>
        )
    }

}

export default Form