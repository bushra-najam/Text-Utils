import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        let newWord = word.toLocaleLowerCase();
        newWord = newWord[0].toLocaleUpperCase()+ word.slice(1);
        return newWord;
    }
  return (
    props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong>{capitalize(props.alert.type)}: </strong> {props.alert.message}
            </div>
    </div>
  )
}

export default Alert
