import styled from 'styled-components';


export const Header = styled.header`
    header{
    min-width: 230px;
    max-width: 1920px;
    }

    #stitulo{
    position: absolute;
    top: -4px;
    left: 91px;
    color: #0500FF;
    text-decoration: underline;
    }

    #servicos{
    position: absolute;
    top: 10px;
    left: 15%;
    list-style: none;
    display: flex;
    min-width: 230px;
    max-width: 1920px;
    }
    
    #servicos div{
    display: flex;
    min-width: 230px;
    max-width: 1920px;
    }
    
    #links {
        text-decoration: none;
        color: #7a7a7a;
        padding: 15px 14px 15px 14px;
        font-family: 'Righteous', cursive;
    }
    
    #linkT {
        color: #7a7a7a;
        font-family: 'Righteous', cursive;
        margin-left: 50px;
    }

    #links:hover {
        background-color: #0500FF;
        color: #fff;
        border: solid 1px #000;
    }
`;

export const Main = styled.main`
    #box{
        margin: auto;
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
    }
    #titleSlogan {
        margin: auto;
        color: black;
        text-align: center;
        font-family: 'Righteous', cursive;
        font-size: 40px;
    }   
    #slogan{
        margin: auto;
        color: #ffffff;
        text-align: center;
        font-family: 'Righteous', cursive;
        font-size: 20px;
        color: #FF0000;
    }
`;

export const Form = styled.form`
#corpo_login{
    background-color: #f0f8ff;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    height: 65vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 70%;
}
#formulario{
  margin: auto;
  width: 350px;
  padding: 20px 0;
  border-radius: 10px;
}

legend{
  text-align:center;
  color: gray;
}
input{
  width:87%;
  height:35px;
  border: none;
  background:#eaeaea;
  padding:0 15px;
  border-radius: 0 5px  5px 0 ;
}

span{
  display:table-cell;
  color: white;
}

.input-group{
  display:table;
  width:100%;
  margin:10px 0;
}
span{ 
  display:table-cell;
  padding:0 2px;
  background:#cccccc;
  border-radius:5px 0  0 5px;
  text-align:center;
}

input[type="submit"]
{
  background: mediumseagreen;
  width:295px;
  border:none;
  color: white;
  cursor:pointer;
  border-radius:5px ;
  font-size:15px;

}

input[type="submit"]:hover
{
  background:#27ae60
}

fieldset
{
  width:300px;
  margin:auto;
  border:none;
}
`