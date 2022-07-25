import React, { Component } from 'react';

// importing react-bootstrap components
import { Container } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { experienceinfoList } from '../../shared/YourInformation';

export default class ExperiencePage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Experience</h1>
                    <div className="info">
                        <table className="table table-responsive table-light table-hover ">
                            <thead>
                                <th>College</th>
                                <th>Position</th>
                                <th>Experience</th>
                            
                            </thead>
                            <tbody>
                                {
                                    experienceinfoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <td>{oneInfo.name}</td>
                                                <td>{oneInfo.position}</td>
                                                <td>{oneInfo.experience}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </Container>
            </>
        )
    }
}
 