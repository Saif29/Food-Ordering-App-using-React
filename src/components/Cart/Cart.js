import classes from "./Cart.module.css";
import Modal from "../UI/Modal"

const Cart = () => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[
                { id: "c1", name: "Sushi", amount: 2, price: 12.0 }].map(
                    (item) => <li>{item.name}</li>
                )
            }
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>24.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
