import React from 'react';

function Form({onSubmit, className}) {
  return (
      <form className='signup-form' onSubmit={onSubmit} >
        <input type="text" name="firstname" placeholder="Имя" className="form-input"/>
        <input type="text" name="secondname" placeholder="Фамилия" className="form-input"/>
        <input type="email" name="email" placeholder="Email" className="form-input"/>
        <input type="password" name="password" placeholder="Пароль" className="form-input"/>
        <button type="submit" className="form-button">Зарегистрироваться</button>
      </form>
  );
}

export default Form;