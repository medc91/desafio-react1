import Card from 'react-bootstrap/Card';

const Card1 = ({ src, title, text }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>

  )
};

export default Card1;