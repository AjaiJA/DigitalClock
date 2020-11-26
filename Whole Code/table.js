import React from 'react';

function Table()
{
    return(
        <table>
            <thead>
            <tr>
                <th>Hour</th>
                <th>Minutes</th>
                <th>Seconds</th>
                <th>Milli Seconds</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.date.getHours()}</td>
                    <td>{this.state.date.getMinutes()}</td>
                    <td>{this.state.date.getSeconds()}</td>
                    <td>{this.state.date.getMilliseconds()} </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;