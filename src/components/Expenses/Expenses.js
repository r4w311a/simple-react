import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                name={props.items[0].name}
                price={props.items[0].price}
                date={props.items[0].date}
            />
            <ExpenseItem
                name={props.items[1].name}
                price={props.items[1].price}
                date={props.items[1].date}
            />
            <ExpenseItem
                name={props.items[2].name}
                price={props.items[2].price}
                date={props.items[2].date}
            />
            <ExpenseItem
                name={props.items[3].name}
                price={props.items[3].price}
                date={props.items[3].date}
            />
        </Card>
    );
}

export default Expenses;