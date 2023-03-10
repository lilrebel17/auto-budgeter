import React, { useState } from "react";
import NumberInput from "../NumberInput/NumberInput.js";
import  AddBillModal from "../AddBillModal/AddBillModal.js";
import formValues from './BudgetFormValues.js'
import './BudgetForm.css'

export default function BudgetForm(props) {
    const [billRenderArray=[],pushToArray] = useState('')

    //Pushes new element to billRenderArray to be rendered in the bills div
    const pushToBillsArray = (name,amount) => {
        //We are pushing a new JSX element to the array that way it renders with a key & className so we can style it.
        const element = 
        <div className={'budgetFormBill'}key={name}>
            <h4>{name}</h4>
            <p>${amount}</p>
        </div>
 
        //We store the newArray as a copy of the old array & the element variable above, if not it overwrites the same text
        const newArray = [...billRenderArray,element]

        pushToArray(newArray)
    }

    //Stores the bill in formValues so we can access it later.
    const storeBill = (name,amount) => {
        formValues.bills.push({name: name, amount: amount})
        console.log("Form Values: ", formValues)
    }

    // Stores the paycheck in formValues to be used later.
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
                <div id={'bills'} onChange={pushToBillsArray}>{billRenderArray}</div>
                <input type="Submit" />
            </form>
            <AddBillModal parentRenderFunction={pushToBillsArray} parentStorageFunction={storeBill}/>
        </div>
    )
}