import React from 'react';

type NewComponentPropsType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string,
}

const NewComponent = (props: NewComponentPropsType) => {
    const cars = props.cars;

    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>

            {
                cars.map((item, index) => {
                    return cars.length > 0
                        ? <tr key={index}>
                            <td>{item.manufacturer} </td>
                            <td>{item.model} </td>
                        </tr>
                        : "No students";
                })
            }
        </table>
    )

};

export default NewComponent;