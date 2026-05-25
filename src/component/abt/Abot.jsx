import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // Fetch data from the Firebase Realtime Database using the provided URL
    fetch('https://cdcn-cca59-default-rtdb.firebaseio.com/abouts.json')
      .then((response) => response.json())  // Parse the JSON data from the response
      .then((data) => {
        // Transform the data to an array and set it in state
        const fetchedData = Object.values(data); // Convert object to array
        setAboutData(fetchedData); // Save data to state
      })
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>; // Show loading text until data is fetched
  }

  return (
    <Container className="py-5">
      {aboutData.map((data, index) => (
        <Row key={index} className="align-items-center mb-4">
          <Col md={6}>
            <Image 
            id='abimg'
              src={data.imageUrl} 
              alt={data.title} 
              fluid 
              rounded 
            />
          </Col>
          <Col md={6} id='AbouTresp'>
            <h2 className="mb-4">{data.title}</h2>
            <p>{data.description}</p>
         
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default AboutUs;
