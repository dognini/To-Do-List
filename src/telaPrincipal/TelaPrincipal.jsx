/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import "./telaPrincipal.css";
import 'react-toastify/dist/ReactToastify.css';

import Card from "./../components/card/card";
import Filter from "../components/filter/filter";
import Search from "../components/title/title.jsx";
import Formulario from "../components/formulario/Formulario";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from "../server/conectSupaBase.jsx";

export default function TelaPrincipal() {

  const [tarefas, setTarefas] = useState([]);

  const [tarefa, setTarefa] = useState('');
  const [categoria, setCategoria] = useState('')

  const [search, setSearch] = useState('');
  const [ordem, setOrdem] = useState("asc");
  const [filter, setFilter] = useState("Todas");


  async function AoSubmeter(e) {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('toDoList-api')
        .insert({
          tarefa: tarefa,
          categoria: categoria
        })
        .select()

      setTarefa('')

      metodoGet()

      toast.success("Tarefa adicionada com sucesso!", { theme: "colored" })

    } catch (error) {
      console.log("error: ", error)

      toast.error("Não foi possivel adicionar a tarefa", { theme: "colored" })
    }
  }


  async function metodoGet() {
    try {
      let { data: getTarefas, error } = await supabase
        .from("toDoList-api")
        .select("*");

      setTarefas(getTarefas);

    } catch (error) {
      console.log(error);
    }
  }


  async function deletarTarefa(id) {
    try {
      const { error } = await supabase
        .from("toDoList-api")
        .delete("")
        .eq("id", id);

      metodoGet();
      toast.success("Tarefa deletada com sucesso", { theme: "colored" });

    } catch (error) {
      console.log(error);

      toast.error("Não foi possivel deletar a tarefa", { theme: "colored" });
    }
  }


  async function completarTarefa(id) {

    const detalhesTarefa = tarefas.find((e) => e.id == id)

    if (!detalhesTarefa) {
      return;
    }

    const newStatus = !detalhesTarefa.status;

    try {
      const { data, error } = await supabase
        .from('toDoList-api')
        .update({ status: newStatus })
        .eq("id", id)
        .select()

      if (error) {
        console.log(error)
        return;
      }

      metodoGet();

      if (newStatus == true) {
        return toast.success("Tarefa concluida com sucesso, Parabens!!", {
          theme: "colored",
        });
      }

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    metodoGet();
  }, []);

  return (
    <div className="to_do_list">
      <ToastContainer />
      <section> <h1> Lista de Tarefas </h1> </section>

      <Search
        search={search}
        setSearch={setSearch}
        title="Pesquisar:"
        placeholder="O que você deseja pesquisar?"
      />

      <div className="separador" />

      <Filter
        labelPrincipal="Filtrar"
        labelSecundaria="Status"
        ordem="Ordem"
        filter={filter}
        setFilter={setFilter}
        setOrdem={setOrdem}
      />

      <div className="separador" />

      {
        tarefas
          ?.filter((tarefas) => filter === 'Todas' ? true : filter === "Completas" ? tarefas.status : !tarefas.status)
          ?.filter((tarefa) => tarefa.tarefa.toLowerCase().includes(search.toLowerCase()))
          ?.sort((a, b) => ordem === "Asc" ? a.tarefa.localeCompare(b.tarefa) : b.tarefa.localeCompare(a.tarefa))
          ?.map(value => (
            <Card
              key={value.id}
              tarefa={value}
              isCompleted={(e) => completarTarefa(e.target.id)}
              excluir={(e) => deletarTarefa(e.target.id)}
            />
          ))
      }

      <div className="separador" />

      <Formulario
        titulo="Criar Tarefa"
        AoSubmeter={AoSubmeter}
        tarefa={tarefa}
        setTarefa={setTarefa}
        setCategoria={setCategoria}
      />
    </div>
  )
}