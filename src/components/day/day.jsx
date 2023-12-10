import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import api from '../../config/api';

//user id, day
const Day = (props) => {
	const { user } = useUser();
	const [open, setOpen] = useState(false);
	const [img, setImg] = useState('https://static.vecteezy.com/system/resources/previews/009/398/466/non_2x/present-box-clipart-design-illustration-free-png.png');
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
				setImg(data.msg);
				openImg()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getDay();
	}, []);

	return <div className='relative self-center justify-self-center bg-red-900 h-15 w-48 text-center text-white text-5xl rounded-lg' onClick={openDay}>{msg}<img src={img} className='absolute left-[80%] top-[20%] h-16'></img></div>;

};

export default Day;