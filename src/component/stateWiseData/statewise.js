import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> <span className="fw-bold">INDIA</span> COVID-19 Dashboard </h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-dark thead-dark">
                            <tr>
                                <td> State </td>
                                <td> Confirmed </td>
                                <td> recovered </td>
                                <td> deaths </td>
                                <td> active </td>
                                <td> updated </td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th> {curElem.state} </th>
                                            <td> {curElem.confirmed} </td>
                                            <td> {curElem.recovered} </td>
                                            <td> {curElem.deaths} </td>
                                            <td> {curElem.active} </td>
                                            <td> {curElem.lastupdatedtime} </td>
                                        </tr>
                                    );
                                })
                            }


                            <tr>
                                <th> State </th>
                                <td> Confirmed </td>
                                <td> recovered </td>
                                <td> deaths </td>
                                <td> active </td>
                                <td> updated </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise;
