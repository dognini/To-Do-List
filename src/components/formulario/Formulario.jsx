/* eslint-disable react/prop-types */

import './formulario.css'
import Select from 'react-select';

const arrayCategoria = [
    { value: "Estudos", label: "Estudos" },
    { value: "Pessoal", label: "Pessoal" },
    { value: "Trabalho", label: "Trabalho" },
]

export default function Formulario({ titulo, AoSubmeter, tarefa, setTarefa, setCategoria }) {

    return (
        <div>
            <h1> {titulo}: </h1>
            <form onSubmit={AoSubmeter} className='formulario'>
                <input value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder='Digite o título da tarefa' />
                <Select
                    placeholder="Selecione uma categoria"
                    className='select-categoria'
                    onChange={(e) => setCategoria(e.value)}
                    options={arrayCategoria}
                />
                <button type='submit'> Salvar Tarefa </button>
            </form>
        </div>
    )
}