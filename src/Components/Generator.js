import React from 'react'
import  styled  from 'styled-components'
import Colors from '../Colors/Colors'
import Passwordinput from './Passwordinput'
import Options from './Options'
import Alternativeoptions from './Alternativeoptions'

const Generator = () => {

    const Generatordiv = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 24px; /* Değer olarak gap-x kullanımı geçerli değildir, gap kullanılmalıdır. */
    width: 510px;
  `;

const Generatorh1 = styled.h1`
    font-size: 24px;
    color: ${Colors.gray}; /* Renk değerleri arasında nokta kullanımı geçerli değildir, nokta yerine virgül kullanılmalıdır. */
    text-align: center;
  `;


    return (
    <Generatordiv>
    <Generatorh1>Password Generator</Generatorh1>
    <Passwordinput/>
    <Options/>
    </Generatordiv>
  )
}

export default Generator