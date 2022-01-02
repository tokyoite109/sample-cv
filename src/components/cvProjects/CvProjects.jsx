import React, { useState} from "react";
import { Container, Row, Col, InputGroup, FormControl, Breadcrumb} from 'react-bootstrap';
import './cvProjects.css'


const Projects = () => {
    const Projects = [
        {
            id: 1,
            name: 'Google',
            url: 'https://www.indiastudychannel.com/attachments/resources/159720-144040-Google-Icon.jpg',
            description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
            created_date: 1998,
        },
        {
            id: 2,
            name: 'Facebook',
            url: 'https://iconarchive.com/download/i54037/danleech/simple/facebook.ico',
            description: 'Meta Platforms, Inc., also known as Meta and formerly known as Facebook, Inc., is a multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries.',
            created_date: 2004,
        },
        {
            id: 3,
            name: 'Instagram',
            url: 'https://thumbs.dreamstime.com/b/instagram-round-icon-vector-instagram-round-multicolor-icon-white-background-134391805.jpg',
            description: 'Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.',
            created_date: 2010,
        },
        {
            id: 4,
            name: 'Youtube',
            url: 'https://kempoutside.com/wp-content/uploads/2021/02/YouTube-logo.jpeg',
            description: 'YouTube is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005 by Steve Chen, Chad Hurley, and Jawed Karim. It is the second most visited website, right after Google itself. ',
            created_date: 2005,
        },
        {
            id: 5,
            name: 'Linkedin',
            url: 'https://thumbs.dreamstime.com/b/linkedin-icon-logo-isolated-white-background-editable-eps-vector-illustration-152396326.jpg',
            description: 'LinkedIn is an American business- and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.',
            created_date: 2002,
        },
    ]


    const [search, setSearch] = useState('')
  
    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const filteredProjects = Projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
        <div className='projects-container' >
            <h2 style={{textAlign:'center', paddingTop:'100px'}}>Projects</h2>
            <Container  style={{padding: '50px'}}>
                <div className='searchInputArea'>
                    <InputGroup >
                        <FormControl placeholder='Search' value={search} onChange={handleInput}>
                        </FormControl>
                    </InputGroup> 
                </div>        
                <Row className='projects-columnTitles'>
                    <Col className='column' sm={2}><b>Name</b></Col>
                    <Col className='column' sm={2}><b>Image</b></Col>
                    <Col className='column' sm={6}><b>Description</b></Col>
                    <Col className='column' sm={2}><b>Created Date</b></Col>
                </Row>

                {filteredProjects.map(project => (
                <Row className='projects-columnContents' key={project.id} className='project'>
                    <Col className='column' sm={2}>{project.name}</Col>
                    <Col className='column' sm={2}><img src={project.url} style={{width: '150px', height: '130px'}}/></Col>
                    <Col className='column' sm={6}>{project.description}</Col>
                    <Col className='column' sm={2}>{project.created_date}</Col>
                </Row>
                ))}
            </Container>
        </div>
        </>
    )
}

export default Projects