import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Logout = () => {

    const history = useHistory();

    // eslint-disable-next-line no-unused-vars
    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res) {
                window.alert('Saia mais tarde');
            } else {
                history.push('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;
