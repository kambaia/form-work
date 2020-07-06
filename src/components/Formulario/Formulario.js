import React from 'react';
import { FaReact, FaPen} from 'react-icons/fa';
import {Tabela_Progrmas, Tabela_Edicador} from "../Tabela";
import  { Container, Form, Selector, Session, Content, Metas, Actividade, Butoes} from './formulario-style';
const Formulario = () => {
    return (
       
        <Container>
            <Selector>
                <select name="programa" className="programa">
                    <option>Seleciona o programa</option>
                </select>
            </Selector>
              <Tabela_Progrmas/>
            <Form>
                <Selector>
                    <select name="acao">
                        <option>Seleciona o ação</option>
                    </select>
                </Selector>


                

                <Session>
                        <Content>
                                <label>Indicador da meta executar</label>
                            <Metas>
                                
                         
                            <div className="input">
                                <input
                                    name="metas"
                                    placeholder="Inserir as metas executadas"
                                />
                             </div>
                            </Metas>
                        </Content>

                        <Content>
                            <label>Reportar actividade Associadas à Acção Selecionadas</label>
                                <Actividade>
                                    <span>Melhorar a tomada de decisões sobre situações de insegurança alimentar através da implementação do Sistema Nacional...</span>
                                </Actividade>                     
                          </Content>
                   
                </Session>

                <Butoes>
                   <button>Registrar
                    </button>
                    <button>Metas</button>
                    <button>Actividades</button>
                    <button>Limpar</button>
                </Butoes>

                <Tabela_Edicador/>
               
            </Form>
       </Container>
    )
}

export default Formulario
