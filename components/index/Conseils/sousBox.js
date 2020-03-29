import React from 'react';

const transition = {
    transition: "max-height 2000ms linear 0s",
    height: "auto",
    display: "block",
    overflow: "hidden",
    maxHeight: "600px"
}

const SousBox = ({
    hook,
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
        <div className="columns is-centered" style={!hook ? { height: "0px", display: "none" } : { transition }} >
            <div className="column is-11">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p>{textBox1}</p>
                    </div>
                    <div className="column">
                        <p className="title has-text-centered">
                            {subtitleBox1}
                        </p>
                    </div>
                </div>
                <br />
                {subtitleBox2&&
                    <>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p className="title has-text-centered">{subtitleBox2}</p>
                            </div>
                            <div className="column">
                                <p>
                                    {textBox2}
                                </p>
                            </div>
                        </div>
                        <br />
                    </>
                }
                {subtitleBox3&&
                    <>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p>{textBox3}</p>
                            </div>
                            <div className="column">
                                <p className="title has-text-centered">
                                    {subtitleBox3}
                                </p>
                            </div>
                        </div>
                        <br/>
                    </>
                }
                {subtitleBox4&&
                    <>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p className="title has-text-centered">{subtitleBox4}</p>
                            </div>
                            <div className="column">
                                <p>
                                    {textBox4}
                                </p>
                            </div>
                        </div>
                        <br />
                    </>
                }
                {subtitleBox5&&
                    <>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p>{textBox5}</p>
                            </div>
                            <div className="column">
                                <p className="title has-text-centered">
                                    {subtitleBox5}
                                </p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default SousBox;