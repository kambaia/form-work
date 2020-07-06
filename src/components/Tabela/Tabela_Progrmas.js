import React from 'react'
import { Tabela} from './Style-tabela';
const Tabela_Progrmas = () => {
    return (
        <div className="tebala-indicador">
            <Tabela>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody className="tbody-data">
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                    
                </tbody>
        </Tabela>
      </div>
    )
}

export  {Tabela_Progrmas}
