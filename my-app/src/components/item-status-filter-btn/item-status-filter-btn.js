import React from 'react';

function AppTab ({className, name, active, onClick }){
        let classNames = className;
        return (<input type="button" value = {name} className={classNames} onClick={onClick}/>)
}

export default AppTab;
