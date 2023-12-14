import React, { useState } from "react";
import { InputType } from "types";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";




const Input = ({ lableName, type, value, onChangeHandler, id }: InputType) => {
  

  return (
    <div className="my-3 mx-6 flex flex-col ">
      <label className="ml-3 mb-2" htmlFor={id}>
        {lableName}
      </label>
      {type === "date"?(
        <DatePicker className="w-[15vw]" defaultValue={dayjs(new Date().toLocaleDateString())} label={lableName} value={dayjs(value)} onChange={(e)=>{
            e!==null?onChangeHandler(e.toString()):
            onChangeHandler(new Date().toLocaleDateString())
        }}/>
      ) : (
        <input
          className="h-10 w-[15vw] rounded p-1 bg-slate-200"
          type={type}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          id={id}
        />
      )}
    </div>
  );
};

export default Input;
