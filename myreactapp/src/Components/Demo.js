import React, { useEffect, useState } from 'react'


export class DetailsList extends React.Component {

    render() {
        return (<><a href='#' onClick={this.props.getDetails}>functionClick</a></>)
    }
}
export function Details(props) {

    const [name, setName] = useState('Avadhesh kumar')

    function clickfun() {
        let a = null;
        let b;
        console.log('a:' + a);
        console.log('b:' + b);
        setName('Raj')
    }

    const setnames = () => {
        setName('Raj')
    }

    return (
        <>
            <div>
                <h2>Functional componet</h2>
                <a href='#' onClick={props.getDetails}>clickfunctioncomponet</a>
                <p>{name}</p>
                <a href='#' onClick={clickfun}>set Name</a>
            </div>
        </>
    )
}


const funccom = () => {

    return (
        <div></div>
    )
}


