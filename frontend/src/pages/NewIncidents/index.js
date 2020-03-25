import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";

import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncidents() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ong_id = localStorage.getItem('ong_id')

    async function handleIncident(e) {
        e.preventDefault()

        const data = ({
            title,
            description,
            value
        })

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ong_id
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('erro ao cadastrar')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhado para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleIncident}>

                    <input
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />  
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}