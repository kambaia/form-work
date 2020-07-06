import styled from 'styled-components'

export  const Tabela = styled.table `
    width: 100%;
    z-index: 2;
    border-collapse: collapse;
    border-spacing: 0;
    overflow-y: hidden;
    box-shadow: 0px 2px 12px rgba(32, 32, 32, .2);
    background: #fafafa;
    margin: auto;
    text-align: justify;
    border-radius: 12px 12px 0 0;
    
    th, td{
        padding: 5px 15px;
    }

    th{
    background-color: #ef5307;
    color:#fafafa;
    text-transform: uppercase;
    font-family: 'Roboto', Arial, sans-serif;
    border:1px solid #ddd
    }
    td:nth-child(2){
        width:70%
    }
    th:nth-child(3){
        width:10%
    }
    tr{
        border-bottom: 1px solid #ddd;
    }
    tr:hover{
        background-color: #ddd;
    }
    
`


