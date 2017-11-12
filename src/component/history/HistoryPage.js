import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as memberActions from '../../actions/memberActions'
import {
    DataTable,
    TableHeader,
    Button
} from 'react-mdl'
import fetch from 'node-fetch'
import { log } from 'util';

class HistoryPage extends Component {

    sendMail() {
        fetch('http://localhost:3003/mail', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...this.props.team})
        })
            .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <DataTable style={{ margin: 'auto', marginTop: '15px' }}
                    shadow={0}
                    rows={[
                        { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
                        { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
                        { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
                    ]}
                >
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                </DataTable>

                <p />

                <Button raised onClick={this.sendMail.bind(this)} >Button</Button>
            </div>

        )
    }

}

function mapStateToProps(state) {
    // console.log(state)
    return {
        team: state.team
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
