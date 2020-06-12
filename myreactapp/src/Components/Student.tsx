import * as React from 'react'
import { StudentModals } from '../Modals/StudentModal'
import { EmployeeDetails } from '../Modals/StudentModal'
import { DetailsList } from './Demo'
import { Details } from './Demo'


class Student extends React.Component<EmployeeDetails, {}> {
    state: EmployeeDetails
    constructor(props: EmployeeDetails) {
        super(props)
        this.state = {
            Id: 0,
            Student: '',
            Email: '',
            contactNo: 0,
            Gender: '',
            VenderDetails: ''
        }
    }

    Details = () => {

        let sm: EmployeeDetails = {
            Id: 1,
            Student: 'Avadhesh kumar',
            Email: 'is.kmr1394@gmail',
            contactNo: 9711146906,
            Gender: 'Male',
            VenderDetails: 'vendor'
        }
        console.log(sm)
        this.setState({
            Id: '2',
            Student: 'Raj',
            Email: 'raj@gmail.com',
            contactNo: 123456789,
            Gender: 'Male',
            VenderDetails: 'vendor'
        })
    }

    componentDidMount() {

    }

    getDetails = () => {
        console.log('cliked')

    }

    getHtml = () => {
        return (
            <div></div>
        )
    }
    render() {
        return (
            <div>
                <a href='#' onClick={this.Details} >click Me</a>
                <h2>Student Dtails</h2>
                <table>
                    <thead><tr><th>Id</th><th>Name</th><th>Email</th><th>Contact</th><th>Gender</th></tr></thead>
                    <tbody><tr><td>{this.state.Id}</td><td>{this.state.Student}</td><td> {this.state.Email}</td><td>{this.state.contactNo}</td><td>{this.state.Gender}</td>
                        <td>{this.state.VenderDetails}</td></tr></tbody>
                </table>

                <div>
                    <DetailsList getDetails={this.getDetails} />
                    <Details getDetails={this.getDetails} />
                </div>
            </div>
        )
    }
}

export default Student