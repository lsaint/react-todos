import React from 'react';

export default props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addTodoAsync(e.target[0].value);
        e.target.reset();
      }}
    >
      <input type="text" placeholder="New Todo" />
    </form>
  );
};
