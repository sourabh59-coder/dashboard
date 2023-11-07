import React from 'react';
import Container from 'react-bootstrap/Container';

// Import your chart component
import '../styles/VisitorsPerDayPage.css';
import LineChart from '../components/LineChart';

function VisitorsPerDayPage() {
  const chartContainerStyle = {
    height: '450px', // Adjust the height as needed
  };

  return (
    <Container>
      <h2 className="mt-3">Visitors Per Day</h2>
      <div className="chart-container" style={chartContainerStyle}>
        <LineChart />
      </div>
    </Container>
  );
}

export default VisitorsPerDayPage;
