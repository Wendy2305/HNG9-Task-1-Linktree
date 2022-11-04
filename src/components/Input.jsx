import React from 'react'

const Input = ({id, classname, type, placeholder, storeInput}) =>{
    return(
        <div>
            <input
                id = {id}
                className={classname}
                type={type}
                placeholder={placeholder}
                onChange = {storeInput()}
                />
        </div>
    )

}

export default Input