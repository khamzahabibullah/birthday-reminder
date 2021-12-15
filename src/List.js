import React from 'react';

const List = (props) => {
  const {people} = props;

  return (
    <>
      {people.map((person) => {
        console.log(person);
        const {id, name, age, image} = person;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
