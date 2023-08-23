/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './card.css'

export default function Card({ tarefa, isCompleted, excluir }) {
    return (
        <section className='div-geral'>
            <div className="card">
                <div className="tarefa" style={{ textDecoration: tarefa.status ? 'line-through' : "" }}>
                    <span> {tarefa.tarefa} </span>
                    <b> {tarefa.categoria} </b>
                </div>
                <div className="acoes">
                    <button className='btn-completar' id={tarefa.id} onClick={isCompleted}> Completar </button>
                    <button className='btn-excluir' id={tarefa.id} onClick={excluir}> Excluir </button>
                </div>
            </div>
        </section>

    )
}