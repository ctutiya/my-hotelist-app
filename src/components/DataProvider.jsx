import React, {useState, useEffect} from 'react';

export const allData = React.createContext();

export default function DataProvider({ children }) {
	const [data, setData] = useState(null);
	const [hotel, setHotel] = useState(null);
	const [hotelData, setHotelData] = useState(null);

	// fetch fake-hotel api
	const setAllData = async () => {
		try {
			const responseApi = await fetch(
				"https://fake-hotel-api.herokuapp.com/api/hotels"
			);

			if (responseApi.status !== 200)
				throw Error(`Oops, error! Error code: ${responseApi.status}`);

			const dataApi = await responseApi.json();

			setData(dataApi);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setAllData();
	}, []);

	useEffect(() => {
		if (data !== null) {
			const hotelInfo = data.filter((item) => item.id === hotel);

			setHotelData(hotelInfo);
		}
	}, [hotel]);

	return (
		<allData.Provider value={{
			data,
			hotel,
			setHotel,
			hotelData
		}}>
			{children}
		</allData.Provider>
	);
}
