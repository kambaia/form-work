
import styled from 'styled-components'

 const Container = styled.div `
        display: block;
        background-color: #ffffff;
        font-family:'Roboto';
        width:100%;
    `
    const Selector = styled.div `
            padding: 20px;
            select{
                padding:8px;
                border-style:none;
                border: 1px solid #ddd;
                color: #333;
                width:20%;
                border-radius:5px
            }
            select:focus{     outline: none;}
    `
    const Form=  styled.form `
       width:98%;
       margin:auto
        
     `
const Session = styled.div `
    display: grid;
    grid-column-gap: 90px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1350px;
    margin: 0 auto;
    grid-gap: 10px;
`
const Content = styled.div `
     height: 230px;
     margin: auto;
     width: 98%;
`
const Metas = styled.div `
    width: 100%;
    border:1px solid #ccc;
     height: 200px;
     margin: auto;
      display: flex;
     position:relative;
    border-radius: 5px;
    input{
        position:absolute;
        margin-bottom: 20px;
        width: 90%;
        margin-left: 4%;
        padding: 6px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 18px;
        bottom:6px;
    }
input:focus{     outline: none; }

`
  
const  Actividade = styled.div `
    width: 100%;
    border:1px solid #ccc;
    height: 200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    justify-items:center;
    border-radius: 5px;

    span{
        margin: 10px 10px 10px;
    }
    
`
const Butoes = styled.div `
        padding: 10px;
        margin: auto;
        width: 80%;

        button{
        width: 10%;
        margin-left:5px ;
        padding: 8px;
        background-color: #2c6cb3;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        font-family: 'Roboto', Arial, sans-serif;
    }
    button:hover{
        background-color: #0d417c;
    }
    button:nth-child(1){
        background-color: #3dc477;
    }
    button:nth-child(4){
         background-color: #cb291e;
    }
    button:nth-child(1):hover{
        background-color: #035e2a;
    }
    button:nth-child(4):hover{
        background-color: #85120a;
    }



    button:focus{     outline: none; }
`
export {
    Container,
    Form,
    Selector,
    Session,
    Content,
    Metas,
    Actividade,
    Butoes
}