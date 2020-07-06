import React from 'react'
import { Tabela} from './Style-tabela';
import { FaEye, FaPen, FaTrash} from 'react-icons/fa';
const Tabela_Edicador = () => {
    return (
        <div className="tebala-indicador">
             <Tabela>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Relatorio</th>
                        <th colspan="3">Opção</th>
                    </tr>
                </thead>
                <tbody className="tbody-data">
                    <tr>
                        <td>Eve</td>
                        <td>Melhorar a tomada de decisões sobre situações de insegurança alimentar através da implementação do...</td>
                        <td><FaPen className="icon" color="#9c9595" size={20}/></td>
                        <td><FaEye className="icon" color="#9c9595" size={20}/></td>
                        <td><FaTrash className="icon" color="#9c9595" size={20}/></td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Melhorar a tomada de decisões sobre situações de insegurança alimentar através da implementação do...</td>
                        <td><FaPen className="icon" color="#9c9595" size={20}/></td>
                        <td><FaEye className="icon" color="#9c9595" size={20}/></td>
                        <td><FaTrash className="icon" color="#9c9595" size={20}/></td>

                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Melhorar a tomada de decisões sobre situações de insegurança alimentar através da implementação do ...</td>
                        <td><FaPen className="icon" color="#9c9595" size={20}/></td>
                        <td><FaEye className="icon" color="#9c9595" size={20}/></td>
                        <td><FaTrash className="icon" color="#9c9595" size={20}/></td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Melhorar a tomada de decisões sobre situações de insegurança alimentar através da implementação do ...</td>
                        <td> <FaPen className="icon" color="#9c9595" size={20}/></td>
                        <td><FaEye className="icon" color="#9c9595" size={20}/></td>
                        <td><FaTrash className="icon" color="#9c9595" size={20}/></td>
                    </tr>
              </tbody>
                </Tabela>
        </div>
       
    )
}

export  {Tabela_Edicador}
