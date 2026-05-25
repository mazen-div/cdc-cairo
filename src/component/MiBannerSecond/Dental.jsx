import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Dental = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('https://cdcn-cca59-default-rtdb.firebaseio.com/dentalTourism.json')
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = Object.values(data);
        setAboutData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-5">
      {aboutData.map((data, index) => (
        <Row key={index} className="align-items-center mb-4">
          <Col md={6} id='AbouTresp'>
            <h2 className="mb-4">{data.title}</h2>
            {/* Preserve line breaks with white-space: pre-line */}
            <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
          </Col>
          <Col md={6}>
            <Image id='abimg' src={data.imageUrl} alt={data.title} fluid rounded />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Dental;
