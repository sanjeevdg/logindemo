import { useState } from 'react';
import {omit} from 'lodash';


const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});
    
    
    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
           
            case 'phone':
                if(
                    !new RegExp(/^[6-9]\d{9}$/gi).test(value)
                ){
                    setErrors({
                        ...errors,
                        phone:'Enter a valid indian phone number - 10 digits beginning with 6,7,8,9'
                    })
                }else{

                    let newObj = omit(errors, "phone");
                    setErrors(newObj);
                    
                }
            break;
            
                      
            default:
                break;
        }
    }



  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;
        
        validate(event,name,val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]:val,
        })

    }

 const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;