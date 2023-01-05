
import { useState, useEffect } from 'react';

export default function useLocalStorage  (key, defaultValue, serialize = JSON.stringify, deserialize = JSON.parse)  {
    const [state, setState] = useState(() => {
        return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
    }); 
    
    useEffect(() => {
        window.localStorage.setItem(key, serialize(state));
    }, [key, state, serialize]);
    
    return [state, setState];
    };
    



    // =======================


    

    // const [contacts, setContacts] = useState(
    //     () => JSON.parse(window.localStorage.getItem(L_KEY)) ?? contactsList
    //   );
    //   const [fillet, setFillet] = useState('');
    
    //   useEffect(() => {
    //     localStorage.setItem(L_KEY, JSON.stringify(contacts));
    //   }, [contacts]);
    