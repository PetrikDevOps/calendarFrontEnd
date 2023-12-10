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
                if (data.day == true){
                    openDay();
				}
                setOpen(data.day);                
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const openDay = () => {
		if (open) return;
		api.post('/openDay', { id: user.id, day: props.day })
			.then(({ data }) => {
                console.log(data.msg);
				setMsg(data.msg);
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
