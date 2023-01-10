import React from "react";
import NumberInput from "../NumberInput/NumberInput.js";
import AddBillModal from "../AddBillModal/AddBillModal.js";
import formValues from './BudgetFormValues.js'
import './BudgetForm.css'

export default function BudgetForm(props) {

   const updateValues = (e) => {
        const paycheckInput = document.getElementById('paycheckInput')
        formValues.paycheckAmount = paycheckInput.value
    }
    const showBillForm = (e) => {
        const addBillModal = document.getElementById('billModal');
        addBillModal.className = 'shown'
    }
    const addNewBill = (e) => {

    }
    return(
        <div id='budgetForm'>
        <form className="BudgetForm" onSubmit={updateValues}>
            <NumberInput 
                inputName='paycheckInput' 
                labelName='Enter Check Amount' 
                formName='checkForm'
                inputID='paycheckInput'
            />
            <input type="Submit" />
        </form>
        <AddBillModal storage={formValues.bills}/>
        </div>
    )
}