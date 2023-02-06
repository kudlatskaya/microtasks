import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number,
}

const NewComponent = (props: NewComponentPropsType) => {
    const students = props.students;

    return (
        <ul>
            {
                students.map((item) => {
                    return students.length > 0
                        ? <li key={item.id}>
                            <span>{item.id} </span>
                            <span>{item.name} </span>
                            <span>{item.age} </span>
                        </li>
                        : "No students";
                })
            }
        </ul>
    )

};

export default NewComponent;