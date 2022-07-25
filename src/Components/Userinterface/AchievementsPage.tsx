import React, { Component } from 'react';

// importing react-bootstrap components
import { Container } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { achievementsinfoList } from '../../shared/YourInformation';


export default class AchievementsPage extends Component {
 
    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Achievements</h1>
                    <div className="info">
                        <table className="table table-responsive table-light table-hover ">
                            <thead>
                                <th>Name</th>
                                <th>count</th>
                            </thead>
                            <tbody>
                                {
                                    achievementsinfoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <td>{oneInfo.name}</td>
                                                <td>{oneInfo.count}</td>
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
 