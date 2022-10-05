import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.css'
import { useDispatch, useSelector} from 'react-redux';
//import { type } from '@testing-library/user-event/dist/type';

export default function Profile() {

	const isCheket = useSelector (state => state);
	const dispatch = useDispatch()

  return (
	<div>
			<div className='content'>
					<ProfileInfo />			
			</div>



			<div>
				<label>
					Задание к 5-му уроку
						<input className='input-profile' 
						type='checkbox' 
						value={isCheket} 
						onChange = {()=>{
						dispatch({type: 'SWITCH_TOGGLE'})
						}} />
				</label>
			</div>

	</div>
  )
}
