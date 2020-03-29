import React from 'react'
import htmlToImage from 'html-to-image';

const ButtonPNG = () => {

    function download(filename, text) {
        let lien = document.createElement('a');
        lien.setAttribute('href', text);
        lien.setAttribute('download', filename);
    
        lien.style.display = 'none';
        document.body.appendChild(lien);
    
        lien.click();
    
        document.body.removeChild(lien);
    }

    function exportPng(){
        if (typeof window !== 'undefined') {
            var node = document.getElementById('pageA4');
    
            htmlToImage.toPng(node)
            .then(function (dataUrl) {
                
                download("CV.png", dataUrl)


                
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        }
    }

    return(
        <>
            <div className="column is-3 is-centered"  onClick={() => exportPng()}>
            <div className="field is-grouped">
                <div className="control">
                    <button class="button is-outlined">
                        <span class="icon">
                            <i class="fas fa-file-image"></i>                        
                        </span>
                        <span>PNG</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ButtonPNG