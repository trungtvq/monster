import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

export function DismissAll() {
    toast.dismiss();
}
export function ToastComponent(props) {
    const render = props.render
    const content = props.content
    const task = props.task
    const toastId = React.useRef(null);

    const notify = () => toastId.current = toast({ content }, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const dismiss = () => toast.dismiss(toastId.current);


    return (
        <div>
            <div onClick={notify}>
                {render}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </div>

    )
}