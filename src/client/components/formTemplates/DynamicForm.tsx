import * as React from 'react';
import InputText from '../formTemplates/InputText';
import TextArea from '../FormTemplates/TextArea';
import InputFile from '../FormTemplates/InputFile';
import CountrySelect from '../FormTemplates/CountrySelect';

export namespace DynamicForm {
  export interface formProps {
    formSchema: any;
  }
}

const DynamicForm: React.SFC<DynamicForm.formProps> = (props) => {
    
    return(
        <form>
        {props.formSchema.map((field,i)=>{
            switch(field.type) {
                case "text" || "email":
                    return <InputText id={field.type} type={field.type} text={field.label} key={i}/>;
                case "image" :
                    return <InputFile id={field.type} text={field.label} key={i}/>;
                case "textarea" :
                    return <TextArea id={field.type} text={field.label} key={i}/>;
                case "country":
                    return <CountrySelect id={field.type} text={field.label} key={i}/>;
                default:
                    return <p>Type not found</p>;
            }
        })}
            <button>Save</button>
            <button>Cancel</button>
        </form>
    );
}

export default DynamicForm;