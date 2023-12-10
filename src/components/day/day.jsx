import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import api from '../../config/api';

//user id, day
const Day = (props) => {
	const { user } = useUser();
	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState(props.day);

	const openImg = () => {
		return (
			<div className='flex flex-col justify-center items-center'>
				<img src={`./img/${props.day}.jpg`} className='w-48 h-48' />
				<div className='text-center text-white text-5xl'>{props.day}</div>
			</div>
		);
	};

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
				openImg()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getDay();
	}, []);

	return <div className='static self-center justify-self-center bg-red-900 h-15 w-48 text-center text-white text-5xl overflow-hidden' onClick={openDay}>{msg}<img src='https://core.co.za/cdn/shop/t/17/assets/mac.png?v=42405330336985380711677574297' className='absolute bottom-50 left-50 w-12 h-12'></img></div>;

};

export default Day;
