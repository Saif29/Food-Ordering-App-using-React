import { Fragment } from "react";
import classes from "./Modal.module.css";
import * as ReactDOM from "react-dom";

const BackDrop = () => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const renderElement = document.getElementById('overlay');

    return <Fragment>
        {ReactDOM.createPortal(<BackDrop />, renderElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, renderElement)}
    </Fragment>
}

export default Modal;