import React from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};



function Maps(props) {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyApKMwcnR1efndcoFotM_-a41uvq0J9ac4"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const position = {
        name: props.name,
        location: {
            lat: props.position.x,
            lng: props.position.y
        },
    }
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position.location}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

            <Marker key={position.name} position={position.location}/>

        </GoogleMap>
    ) : <></>
}

export default React.memo(Maps)