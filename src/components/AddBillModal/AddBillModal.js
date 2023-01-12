import React, { useState } from "react";
import './AddBillModal.css'
import '../../global.css'

export default function AddBillModal(props) {
    //Set name & amount to a default value so we dont go from an uncontrolled component to a controlled component
    const [name = "",newName] = useState()
    const [amount = "",newAmount] = useState()

    //Handles updating the value for the textarea name input on the modal
    function updateName(e) {
        newName(e.target.value)
    }

    //handles updating the value for the amount input on the modal
    function updateAmount(e) {
        newAmount(e.target.value)
    }

    //Hides the modal, is called by the X button & Submit button on modal
    function hideModal(e) {
        document.getElementById('billModalContainer').classList.replace('shown','hidden')
        console.log(`Add Bill Modal: HIDDEN`)
    }

    //Shows the modal, called by the + button that doesnt get hidden
    function showModal(e) {
        console.log(`Add Bill Modal: SHOWN`)
        document.getElementById('billModalContainer').classList.replace('hidden','shown')
    }

    //Checks for empty & whitespace inputs so we dont get empty names or amounts
    function validateForm() {
        const alert = document.getElementById('billModalAlert')
        if(name === "" || amount === "") {
            alert.innerHTML = 'One of more fields are missing'
            setTimeout(() => {alert.innerHTML = ""},4000)
            return
        }
        if(name.match(/^\s*$/)) {
            alert.innerHTML = 'Name field is invalid'
            setTimeout(() => {alert.innerHTML = ""},4000)
            return
        }
        //If it passes, we check for Render & Storage functions for all the info from the form.
        else {
            if(props.parentRenderFunction != null) {
                props.parentRenderFunction(name,amount)
            }
            if(props.parentStorageFunction != null) {
                props.parentStorageFunction(name,amount)
            }
            //Finally we reset the form & hide the modal
            resetAllStates()
            hideModal()
        }
    }

    //Sets our modals editable values to the default state
    function resetAllStates() {
        newName("")
        newAmount("")
    }

    return(
        <div>
            <button type={'button'} onClick={showModal}>+</button>
            <div id='billModalContainer' className="hidden">
                <form id='billModal'>
                <h1>Add New Bill</h1>
                <p id={'billModalAlert'}></p>
                <button type={'button'} onClick={hideModal}>X</button>
                <textarea id={'billName'} value={name} placeholder={'Name'} onChange={updateName}></textarea>
                <input type={'number'} min={0} step={0.01} id={'billAmount'} value={amount} placeholder={'Amount'} onChange={updateAmount}></input>
                <input id={'billModalSubmit'}type={'submit'} onClick={validateForm}></input>
                </form>
            </div>
        </div>
    )
}