import { useEffect, useContext } from 'react';
import { UiContext } from '../context/UIContext';


const useHideMenu = (ocultar) => {
    const {showMenu, hideMenu} = useContext(UiContext);
    
    useEffect(() => {
        if(ocultar){
            hideMenu();
        }else{
            showMenu();
        }
    }, [ocultar, hideMenu, showMenu]);
};

export default useHideMenu;
