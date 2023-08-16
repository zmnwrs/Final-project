import { useMemo } from 'react';
import { GoogleMap, Marker, LoadScript, useLoadScript } from '@react-google-maps/api';

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>loading...</div>
    return <Map />;
}

function Map() {


    const center = {
        lat: -37.81218719482422,
        lng: 144.96229553222656,
    };
    return (
        <GoogleMap zoom={10} certer={center}
            mapContainerClassName='map-container' >
            <Marker position={center} />
        </GoogleMap>
    );
}

