interface Token{
    currentSession:string|null;
}
interface StateChangeFunction{
    createNote:()=>void

}

export interface Context{
    session:Token|null;
    stateChangefunction:StateChangeFunction
}


export interface InputType{
    lableName:string;
    type:string;
    value:string;
    onChangeHandler:(val:string)=>void
    id:string
}