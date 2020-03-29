import React from 'react';

const index = ({title, arg1,arg2,arg3}) => {
    return (
        <section className="hero is-blue is-large">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-size-1 has-text-light">
                        {title}
                    </h1>
                    <div className="trait-title-blue"></div>
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child notification is-light">
                                        <p class="title has-text-dark has-text-centered is-size-1 has-text-weight-bold">1</p>
                                        <div className="trait"></div>
                                        <p class="title has-text-dark has-text-centered is-size-1 has-text-weight-bold" style={{ marginTop: "100px", marginBottom: "100px" }}>{arg1}</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-light">
                                        <p class="title has-text-dark has-text-centered is-size-1 has-text-weight-bold">2</p>
                                        <div className="trait"></div>
                                        <p class="title has-text-dark has-text-centered is-size-1 has-text-weight-bold" style={{ marginTop: "100px", marginBottom: "100px" }}>{arg2}</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-light">
                                        <p class="title has-text-dark has-text-centered is-size-1 has-text-weight-bold">3</p>
                                        <div className="trait"></div>
                                        <p class="title has-text-dark has-text-centered is-size-3 has-text-weight-bold" style={{ marginTop: "100px", marginBottom: "100px" }}>{arg3}</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;