import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const {onSubmit} = props;

    const [valueText, setValueText] = useState('')

    const handleText = (e) => {
        setValueText(e.target.value)
    };

   const handleSubmit = (e) => {
        e.preventDefault();

        if(!onSubmit) return ;

         const formValue = {
             title: valueText,
         };
         onSubmit(formValue);

         //reset form
       setValueText('')
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} value={valueText} onChange={handleText}/>
        </form>
    );
}

export default TodoForm;