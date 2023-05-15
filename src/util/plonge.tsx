import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://dive-and-collect.defit.io/api/dives/1',
    headers: {},
};
axios
    .request(config)
    .then((response) => {
        console.log('RESPONSE ==>', JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });

export const Plonge = (id: number) => {
    const [idCarnet, setidCarnet] = useState(null);
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [geolocation, setGeolocation] = useState(null);
    const [city, setCity] = useState(null);
    const [maxDepth, setMaxDepth] = useState(null);
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://dive-and-collect.defit.io/api/dives/${id}`,
            headers: {},
        };
        axios
            .request(config)
            .then((response) => {
                setidCarnet(response.data.id);
                setName(response.data.name);
                setDate(response.data.date);
                setGeolocation(response.data.geolocation);
                setCity(response.data.city);
                setMaxDepth(response.data.maxDepth);
                setDuration(response.data.duration);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return <></>;
};
