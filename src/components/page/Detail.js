import React, { Component } from 'react'

export class Detail extends Component {
    render() {
        return (
            <div>
                 <h2>Detail</h2>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Event Name</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Star Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                            <td>1</td>
                            <td>Tawuran Antar Warga se-Jakarta</td>
                            <td>Jakarta</td>
                            <td>Pertempuran jakarta yang diikuti oleh warga se-DKI Jakarta </td>
                            <td>20/03/20</td>
                            <td>20/03/20</td>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Detail
