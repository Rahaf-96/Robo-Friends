import React from 'react';


const Scroll = (props) => {
    return (
            <div style={{ overflowY: 'scroll', border:'5px solid rgba(0,128,128,1)', height: '800px'}}>
                {props.children}
            </div>
    );
}




export default Scroll;