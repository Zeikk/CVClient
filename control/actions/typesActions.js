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
