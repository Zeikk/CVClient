import React from 'react';
import SousBox from './sousBox';

const Box = ({
    boxHook, 
    setBox, 
    title, 
    textBox1, 
    subtitleBox1, 
    textBox2, 
    subtitleBox2, 
    textBox3, 
    subtitleBox3,
    textBox4, 
    subtitleBox4, 
    textBox5, 
    subtitleBox5
}) => {
    return (
        <div class="box" onClick={e => setBox(!boxHook)} >
            <article class="media">
                <div class="media-content">
                    <div className="columns is-vcentered is-mobile">
                        <div className="column content is-11">
                            <div className="columns" style={{margin:"0"}}>
                                <div className="column is-12">
                                    <h1 className="subtitle has-text-dark has-text-weight-semi is-size-4"> {title}</h1>
                                </div>
                                <div className="column">
                                    {
                                        !boxHook ?
                                            <i class="fas fa-chevron-right is-size-3"></i>
                                            :
                                            <i class="fas fa-chevron-down is-size-3"></i>
                                    }
                                </div>
                            </div>


                            {
                                boxHook && 
                                    <hr style={{color: '#333'}}/>
                                }
                                <SousBox 
                                    hook={boxHook}
                                    textBox1={textBox1} 
                                    subtitleBox1={subtitleBox1} 
                                    textBox2={textBox2} 
                                    subtitleBox2={subtitleBox2}
                                    textBox3={textBox3}
                                    subtitleBox3={subtitleBox3}
                                    textBox4={textBox4}
                                    subtitleBox4={subtitleBox4}
                                    textBox5={textBox5}
                                    subtitleBox5={subtitleBox5}
                                />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Box;