import React, { useState } from "react";
import './AddBillModal.css'
import '../../global.css'

export default function AddBillForm(props) {
    const [name,newName] = useState()
    const [amount,newAmount] = useState()

    function updateName(e) {
        newName(e.target.value)
        console.log(`Name: ${name}`)
    }

    function updateAmount(e) {
        newAmount(e.target.value)
        console.log(`Amount: ${amount}`)
    }

    function updateStorage () {
            props.storage = [name,amount]
    }

    function hideModal(e) {
        document.getElementById('billModalContainer').classList.replace('shown','hidden')
        console.log("click")
    }

    function showModal(e) {
        console.log("CLICK")
        document.getElementById('billModalContainer').classList.replace('hidden','shown')
    }

    return(
        <div>
            <button type={'button'} onClick={showModal}>+</button>
            <div id='billModalContainer' className="hidden">
                <form id='billModal'>
                <h1>Add New Bill</h1>
                <button type={'button'} onClick={hideModal}>X</button>
                <textarea id='billName' onChange={updateName}></textarea>
                <input id='billAmount' onChange={updateAmount}></input>
                <input type={'submit'} onClick={updateStorage}></input>
                </form>
            </div>
        </div>
    )
}