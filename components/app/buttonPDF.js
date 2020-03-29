import React, { useContext } from 'react';
import UserContext from "../UserContext"



const ButtonPDF = () => {
    const {
        resume,
    } = useContext(UserContext);

    return(
        <div className="column is-3 is-centered"  onClick={() => resume.save()}>
            <div className="field is-grouped">
                <div className="control">
                    <button class="button is-outlined">
                        <span class="icon">
                            <i class="fas fa-file-pdf"></i>                        
                        </span>
                        <span>PDF</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ButtonPDF;