/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import axios from 'axios'

export const logUser = async (user)  => {

	console.log(user)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/login', {
		email: user.mail,
		password: user.mdp,
	}).catch((error) => {
		return {
			error: true
		}
	})

	return res
}

export const createUser = async (user)  => {

	console.log(user)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users', {
		name: user.nom,
		firstname: user.prenom,
		email: user.mail,
		password: user.mdp,
		password2: user.mdp2
	}).catch(() => {
		return {
			error: true
		}
	})
	return res
}

export const getUser = async (id)  => {
	
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/profil', {
		id: id
	}).catch(() => {
		return {
			error: true
		}
	})
	return res
}

export const getUsers = async ()  => {
	
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/getUsers'
	).catch(() => {
		return {
			error: true
		}
	})
	console.log(res)
	return res
}

export const updateProfil = async (user)  => {

	console.log(user)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/profil/infos', {
		id: user.id,
		name: user.name,
		firstname: user.firstname
	}).catch(() => {
		return {
			error: true
		}
	})
	
	return res
}

export const updateAdresse = async (user)  => {

	console.log(user)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/profil/adresse', {
		id: user.id,
		email: user.mail,
		email2: user.newMail,
		password: user.mdp
	}).catch(() => {
		return {
			error: true
		}
	})
	
	return res
}

export const deleteUser = async (user)  => {

	console.log(user)
	const res = await axios.delete('https://cv-creator-server.herokuapp.com/users/me', {
		id: user.id
	}).catch(() => {
		return {
			error: true
		}
	})
	
	return res
}

export const deleteUserAdmin = async (id)  => {

	console.log(id)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/delete', {
		id: id
	}).catch(() => {
		return {
			error: true
		}
	})
	
	return res
}

export const logoutUser = async (user)  => {

	console.log(user)
	const res = await axios.post('https://cv-creator-server.herokuapp.com/users/logout', {
		token: user.token
	}).catch(() => {
		return {
			error: true
		}
	})
	return res
}
