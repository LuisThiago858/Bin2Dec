import React from 'react';

export default function InputTextBin(){
    return (
        <input type={'text'} className={'content-input'} onChange={catchText} placeholder="Digite um numero binário"></input>
    );
}

