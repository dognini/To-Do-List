/* eslint-disable react/prop-types */
import './filter.css';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const arrayFilter = [
    { value: "Todas", label: "Todas" },
    { value: "Completas", label: "Completas" },
    { value: "Incompletas", label: "Incompletas" },
]

export default function Filter({ labelPrincipal, labelSecundaria, ordem, setFilter, setOrdem }) {

    return (
        <div className='div_filter'>
            <label> {labelPrincipal}: </label>

            <div className='div_geral'>

                <div className='filter'>
                    <label> {labelSecundaria}: </label>
                    <Select
                        className='select-filter'
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={(e) => setFilter(e.value)}
                        options={arrayFilter}
                    />
                </div>

                <div className='div-ordem'>
                    <label> {ordem}: </label>
                    <div>
                        <button onClick={() => setOrdem('Asc')}> Asc </button>
                        <button onClick={() => setOrdem('Desc')}> Desc </button>
                    </div>
                </div>

            </div>
        </div>
    )
}