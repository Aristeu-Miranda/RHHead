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
