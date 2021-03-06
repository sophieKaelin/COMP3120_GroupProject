import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, FormControl } from "react-bootstrap"
import axios from "axios"

const SearchBar = ({ history, setMovie }) => {
	const [searched, setSearch] = useState([])

	const search = (e) => {
		e.preventDefault()
		console.log("searched: ", searched)
		axios
			.get("/api/movie/title", {
				params: { title: searched },
			})
			.then((res) => {
				console.log(res)
				setMovie(res.data)
				//TODO: REDIRECT TO MOVIE CARD WITH RES AS MOVIE DATA
				//History.push ? {"/movie/" + res.data.imdbID}
				history.push("/movie/" + res.data.imdbID)
			})
			.catch((err) => console.log(err))
	}

	const handleSearchChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<Form inline style={{ margin: "15px" }} onSubmit={search}>
			<FormControl
				onChange={handleSearchChange}
				type="text"
				placeholder="Search"
				className="mr-sm-2"
				style={{ width: "300px" }}
			/>
			<Button onClick={search}>Search</Button>
		</Form>
	)
}

export default SearchBar
