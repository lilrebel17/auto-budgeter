import React from "react";
import NumberInput from "../NumberInput/NumberInput.js";
import  AddBillModal from "../AddBillModal/AddBillModal.js";
import formValues from './BudgetFormValues.js'
import './BudgetForm.css'

export default function BudgetForm(props) {
    const renderBill = () => {
        console.log(document.getElementById)
    }
   const updateValues = (e) => {
        const paycheckInput = document.getElementById('paycheckInput')
        formValues.paycheckAmount = paycheckInput.value
        console.log(formValues)
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
            <AddBillModal storageArray={formValues.bills} />
            <div id={'billRender'}></div>
        </div>
    )
}