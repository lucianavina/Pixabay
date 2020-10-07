import React from 'react';

const Error = ({messaje}) => {
    return (  
        <p className='my-3 p-4 text-center alert alert-primary'>{messaje}</p>
    );
}
 
export default Error;