import React, { Component } from 'react'
import {Card,Table} from 'react-bootstrap';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
export default class Past extends Component {
    render() {
        return (
            <div>
                <Card xs={6} md={4}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                        <Table>
                            <thead>
                                <tr>
                                    <th>
                                        Flow of water
                                    </th>
                                    <th>id:87965</th>
                                    <th>Last Updated:26 Aug 2020</th>
                                    <th>Resolved<CheckCircleTwoToneIcon/></th>
                                </tr>
                            </thead>
                        </Table>
                        </Card.Subtitle>
                        <Card.Subtitle>
                            Electrical > Kitchen
                        </Card.Subtitle><br></br>
                        <Card.Text>
                        Its a long establishment fact that a reader will be distracted
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
