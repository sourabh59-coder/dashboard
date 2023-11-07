import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Sparklines from '../components/Sparklines';
import '../styles/VisitorsByAgePage.css';

function VisitorsByAgePage() {
  // Define state variables to store input values
  const [startDay, setStartDay] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endDay, setEndDay] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the input values for further processing
    console.log('Start Date:', `${startDay}/${startMonth}/${startYear}`);
    console.log('End Date:', `${endDay}/${endMonth}/${endYear}`);
  };

  // Create arrays for day, month, and year options
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 14 }, (_, i) => 2010 + i);

  return (
    <Container>
      <h2 className="mt-3 mb-4">Visitors by Age</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="startDay">
              <Form.Label>Start Day:</Form.Label>
              <Form.Control
                as="select"
                value={startDay}
                onChange={(e) => setStartDay(e.target.value)}
              >
                <option value="">Select Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="startMonth">
              <Form.Label>Start Month:</Form.Label>
              <Form.Control
                as="select"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="startYear">
              <Form.Label>Start Year:</Form.Label>
              <Form.Control
                as="select"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="endDay">
              <Form.Label>End Day:</Form.Label>
              <Form.Control
                as="select"
                value={endDay}
                onChange={(e) => setEndDay(e.target.value)}
              >
                <option value="">Select Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="endMonth">
              <Form.Label>End Month:</Form.Label>
              <Form.Control
                as="select"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="endYear">
              <Form.Label>End Year:</Form.Label>
              <Form.Control
                as="select"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
      </Form>
      <div className="chart-container">
      <Sparklines
        startDay={startDay}
        startMonth={startMonth}
        startYear={startYear}
        endDay={endDay}
        endMonth={endMonth}
        endYear={endYear}
      />
      </div>
    </Container>
  );
}

export default VisitorsByAgePage;
