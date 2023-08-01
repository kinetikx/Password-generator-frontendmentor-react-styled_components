    import React, { useState,useEffect, useContext } from "react";
    import { styled } from "styled-components";
    import Colors from "../Colors/Colors";
    import DataContext from "../Store/DataContext";


    const Rangeinput = () => {
        const {value, setValue} = useContext(DataContext);

        
          
        
        const handleChange =(e)=>{
            const { value } = e.target
            setValue(value)
        }

        useEffect(()=>{
            console.log("Rangeinput.js : value :"  ,value)
        })
      

    const StyledRangeInput = styled.input.attrs((props) => ({
        style: {
        background: `linear-gradient(to right, ${Colors.green}, ${Colors.green} ${
            ((props.value - props.min) / (props.max - props.min)) * 100
        }%, ${Colors.darkBlue} ${
            ((props.value - props.min) / (props.max - props.min)) * 100
        }%)`,
        },
    }))`
        cursor: pointer;
        width: 100%;
        appearance: none;
        border-color: transparent;
        margin-bottom: 22px;

        /* Thumb style for webkit-based browsers (e.g., Chrome, Safari) */
        &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 32px;
        height: 32px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -12px;
        margin-bottom: -12px;
        }

        &::-webkit-slider-thumb:hover {
        -webkit-appearance: none;
        appearance: none;
        width: 32px;
        height: 32px;
        border: 2px solid;
        border-color: ${Colors.green};
        background-color: ${Colors.darkGray};
        border-radius: 50%;
        cursor: pointer;
        margin-top: -12px;
        margin-bottom: -12px;
        }


        /* Thumb style for Mozilla Firefox */
        &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background-color: #007bff;
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -5px;
        }
    `;



    return (
        <StyledRangeInput type="range" min="0" max="20"  value={value} onChange={(e) => handleChange(e)} />
    );
    };

    export default Rangeinput;
