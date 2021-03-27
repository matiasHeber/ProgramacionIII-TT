import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      
        <Sidebar/>

        
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">

            <Navbar />
            {/* Contenido principal */}

            <PageContent />

            {/* FOOTER */}

            <Footer />

          </div>
        </div>
     
    </React.Fragment>
  );
}

export default App;
