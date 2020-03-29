import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import '../styles/index.sass'

import Page from '../components/page';

class App extends Component {


    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', paddingTop: 20, backgroundColor: 'gray'}}>
                <div style={{ textAlign: 'center', marginBottom: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>download</button></div>
                <PDFExport paperSize={'auto'} 
                    fileName="CVcreator.pdf"
                    title=""
                    subject=""
                    keywords=""
                    producer="UTF-8"
                    ref={(r) => this.resume = r}>
                    <div style={{
                        height: 1170,
                        width: 827,
                        padding: 'none',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden'
                    }}>
                        <Page></Page>
                    </div>
                </PDFExport>
            </div>
        );
    }
}

export default App;