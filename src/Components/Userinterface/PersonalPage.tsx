import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { infoList, basicinfo } from '../../shared/YourInformation';

export default class PersonalPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Personal Information</h1>
                    <div className="profile-logo">
                        {/* Provide your photo and name */}
                        <img id="profile-photo" src="./assets/myphoto.png" alt="Profile Photo" />
                        <h4 id="profile-name">{basicinfo.yourName}</h4>
                    </div>
                    <div className="profile-info">
                        <p id="profile-info-text">
                        Dr. R. Megala, MCA, M.Phil, PH.D. is currently working as an Assistant Professor of Computer Science at S.A. College of Arts and Science, Chennai. I have 3 years of experience in academic and various administrative activities. I have completed my research at the University of Madras. I have published 7 international journals, which include two papers in Springer series journals and two papers in the IEEE digital library. I have presented my research papers at various international and national conferences. I have completed 10 more online courses in NPTEL, ARPIT, IEEE, Big Data University, Data Camp, Coursera, etc. I am currently doing my certification in "Full Stack Development" at ICT Kerala.
                        </p>
                        <Table className="table table-responsive table-light table-hover ">
                            <tbody>
                                {
                                    infoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <th style={{ paddingRight: "2rem" }}>
                                                    {oneInfo.key + ": "}
                                                </th>
                                                <td>{oneInfo.value}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </>
        )
    }
}
 