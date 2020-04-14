import React from 'react';
import UserServiceContext from '../user-service-context';


const withUserService =(Wrapped)=>{
    return (props) => {
        return(
            <UserServiceContext.Consumer>
                {
                    (userService) =>{
                        return( <Wrapped {...props} userService={userService} />);
                    }
                }

            </UserServiceContext.Consumer>
        );

    }

}

export default withUserService;