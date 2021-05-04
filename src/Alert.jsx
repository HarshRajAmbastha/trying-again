import React from 'react';
function Alert(){
    return(
        <>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Hey User!</strong>You are viewing the most beautiful website of the world.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
    );
}
export default Alert