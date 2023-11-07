import React from 'react';
import Container from 'react-bootstrap/Container';
import PopChart from '../components/PopChart';
import '../styles/VisitorsPerCountryPage.css'

// Import your chart component

function VisitorsPerCountryPage() {
  return (
    <Container>
      <h2 className="mt-3 mb-4">Visitors Per Country</h2>
      <div className="chart-container">
        <PopChart/>
      </div>
    </Container>
  );
}

export default VisitorsPerCountryPage;
