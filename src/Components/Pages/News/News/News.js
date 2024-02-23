import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url } = news;
    return (
        <div>
            <h3>This is News Pages:{news.title}</h3>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/`}>
                        <Button variant="primary">All News In this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;