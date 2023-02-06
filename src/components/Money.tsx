import React, {useState} from 'react';
import Button from "./Button";

type BunknoteType = {
    banknots: string,
    value: number,
    number: string,
}

type MoneyPropsType = {
    money: Array<BunknoteType>
}

type FilterType = 'all' | 'rubles' | 'dollars';

const Money = (props: MoneyPropsType) => {
    const {money} = props;
    let filteredMoney = money;

    const [filter, setFilter] = useState<FilterType>('all');

    if (filter == 'rubles') {
        filteredMoney = money.filter(item => item.banknots == 'RUBLS');
    }

    if (filter == 'dollars') {
        filteredMoney = money.filter(item => item.banknots == 'Dollars');
    }

    const onClickHandler = (filterValue: FilterType) => {
        setFilter(filterValue);
    }

    return (<>
            <table>
                <tr>
                    <th>banknotes</th>
                    <th>value</th>
                    <th>number</th>
                </tr>
                {
                    filteredMoney.map((item) => {
                        return money.length > 0
                            ? <tr key={item.number}>
                                <td>{item.banknots} </td>
                                <td>{item.value} </td>
                                <td>{item.number} </td>
                            </tr>
                            : "No money";
                    })
                }
            </table>

            <Button name={'All'} callBack={() => onClickHandler('all')}/>
            <Button name={'RUBLS'} callBack={() => onClickHandler('rubles')}/>
            <Button name={'Dollars'} callBack={() => onClickHandler('dollars')}/>
        </>
    );
};

export default Money;