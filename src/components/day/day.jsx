import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import api from '../../config/api';

//user id, day
const Day = (props) => {
	const { user } = useUser();
	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState(props.day);

	const getDay = () => {
		api.post('/getDay', { id: user.id, day: props.day })
			.then(({ data }) => {
				if (data == true){
					openDay();
				}
				console.log(data);
				setOpen(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const openDay = () => {
		if (open) return;
		api.post('/openDay', { id: user.id, day: props.day })
			.then(({ data }) => {
				setMsg(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getDay();
	}, []);

	return <div onClick={openDay}>{msg}</div>;

};

export default Day;
