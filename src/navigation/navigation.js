import React from 'react';
import {
    Navigate,
    Routes,
    Route,
} from 'react-router-dom';
import StreamList from '../screens/StreamListPage/StreamList'
import Stream from '../screens/StreamViewPage/StreamView'

const NavigationRoute = (props) => {

    return (
        <Routes>
            <Route path="/streams" element={<StreamList streamList={props.streamList} />} />
            <Route path="/stream/:id" element={<Stream />} />
            <Route path="/" element={<Navigate replace to="/streams" />} />
        </Routes>
    )
}

export default NavigationRoute;