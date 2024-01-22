import React from 'react'
import { Conversion } from '../utils/bin2dec.js';

export default function ButtonConvert(){
    return(
        <button className={'content-button'} onClick={Conversion}>Converter</button>
    );
}