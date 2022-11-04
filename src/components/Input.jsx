import React from 'react'

const Input = ({id, classname, type, placeholder, name, value, onChange}) =>{
    return(
        <div>
            <input
                id = {id}
                className={classname}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange = {onChange()}
                />
        </div>
    )

}

export default Input