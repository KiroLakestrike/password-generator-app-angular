export interface InputRangeSliderInterface {
    label: {
        text:string;
        location:'before' | 'after';
    }
        name:string;
        id:string;
        min:number;
        max:number;
        value:number
}
