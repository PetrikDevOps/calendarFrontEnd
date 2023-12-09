import React, { useEffect } from 'react';
import DayButtonClosed from './dayButtonClosed';
import DayButtonOpen from './dayButtonOpen';

import api from '../../config/api';
import { useState } from 'react';
//user id, day
const Day = (props) => {
	const [open, setOpen] = useState(true);
	const [msg, setMsg] = useState('');

	useEffect(() => {
		api.get(`/api/calendar/?id=${props.user}+day=${props.day}`)
			.then((res) => {
				setOpen(res.data.open);
				setMsg(res.data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClick = () => {
		api.get(`/api/calendar/open/?id=${props.user}+day=${props.day}`)
			.then((res) => {
				setOpen(res.data.open);
				setMsg(res.data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	if (!open) {
		return (
			<DayButtonClosed
				day={props.day}
				handleClick={handleClick}
			/>
		);
	} else {
		return (
			<DayButtonOpen
				msg={msg}
				handleClick={handleClick}
			/>
		);
	}
};

export default Day;
