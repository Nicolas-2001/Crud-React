import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/clientes";

function AgregarCliente() {
	const [nombres, setNombres] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [documento, setDocumento] = useState("");
	const [correo, setCorreo] = useState("");
	const [telefono, setTelefono] = useState("");
	const [direccion, setDireccion] = useState("");
	const navigate = useNavigate();

	const guardarClientes = async (g) => {
		g.preventDefault();
		await axios.post(URL, {
			nombres: nombres,
			apellidos: apellidos,
			documento: documento,
			correo: correo,
			telefono: telefono,
			direccion: direccion,
		});
		navigate("/");
	};
	return (
		<div className="container" style={{ textAlign: "center" }}>
			<h3> Agregar Cliente </h3>
			<form onSubmit={guardarClientes}>
				<div className="mb-3">
					<label className="from-label"> Nombres </label>
					<input
						value={nombres}
						onChange={(g) => setNombres(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Apellidos </label>
					<input
						value={apellidos}
						onChange={(g) => setApellidos(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Documento </label>
					<input
						value={documento}
						onChange={(g) => setDocumento(parseInt(g.target.value))}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Correo </label>
					<input
						value={correo}
						onChange={(g) => setCorreo(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Telefono </label>
					<input
						value={telefono}
						onChange={(g) => setTelefono(parseInt(g.target.value))}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Direccion </label>
					<input
						value={direccion}
						onChange={(g) => setDireccion(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-success">
					{" "}
					<i className="bi bi-person"></i>
					{" Agregar"}
				</button>{" "}
				<button
					onClick={() => {
						navigate("/");
					}}
					className="btn btn-primary"
				>
					{" "}
					<i className="bi bi-arrow-left-circle"></i>
					{" volver"}
				</button>
			</form>
		</div>
	);
}

export default AgregarCliente;
