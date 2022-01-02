import React, { useState} from "react";
import { Container, Row, Col, InputGroup, FormControl, Breadcrumb } from 'react-bootstrap';
import './cvStack.css'

const Stack = () => {
    const Tools= [
        {
            id: 1,
            name: 'HTML',
            url:'https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-6.png'
        },
        {
            id: 2,
            name: 'CSS',
            url:'https://www.logolynx.com/images/logolynx/3a/3a3ca8bcfc4dafc373f063b4c5571ac8.png'
        },
        {
            id: 3,
            name: 'Javascript',
            url:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5b30'
        },
        {
            id: 4,
            name: 'Git',
            url: 'https://krzysztofnyrek.pl/wp-content/uploads/2020/12/git-1.png'
        },
        {
            id: 5,
            name: 'React',
            url: 'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'
        },
    ]


    const [search, setSearch] = useState('')
  
    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const filteredTools = Tools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
        <div className='stack-container'>

            <h2 style={{textAlign:'center', paddingTop:'100px'}}>Stack</h2>
            <Container   style={{padding: '50px'}}>
                <div className='searchInputArea' style={{marginBottom:'50px'}}>
                    <InputGroup >
                        <FormControl placeholder='Search' value={search} onChange={handleInput}>
                        </FormControl>
                    </InputGroup> 
                </div>        

                {filteredTools.map(tool => (
                <Row key={tool.id} className='tool'>
                    <Col style={{display:'flex', flexDirection:'column', alignItems:'center' }}  className='column tools' sm={12}><img style={{width: '200px', height:'200px'}} src={tool.url}/><div style={{visibility:'hidden'}}>{tool.name}</div></Col> 
                </Row>
                ))}
            </Container>
        </div>
        </>
    )
}

export default Stack