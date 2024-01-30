import React from 'react';
import { useState , useCallback} from 'react';

export default function InputTextBin(){
    //visualizar o valor e alterar o valor
    const [value, setValue] = useState("")
    const [isValid, setIsValid] = useState(false)

    const catchText =useCallback((event, input) => {
        
        setValue(event.target.value);
        
    }, []);
    if(setValue.length>8){
        setIsValid(true)
    }


    return (
        <div>
            <input type={'text'} className={'content-input'} onChange={catchText} placeholder="Digite um numero binário" />
            <p>{value}</p>
        </div>
        //
    );
}

/*onChange={catchText}*/