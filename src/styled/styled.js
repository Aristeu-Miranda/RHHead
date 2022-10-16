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
        font-family: 'Righteous, sans-serif';
        font-weight: bold;
    }
    
    #linkT {
        color: #7a7a7a;
        font-family: 'Righteous, sans-serif';
        margin-left: 50px;
    }

    #links:hover {
        background-color: #0500FF;
        color: #fff;
        border: solid 1px #000;
    }
`;

export const Main = styled.main`
    #main {
        background-image: url(backbody.JPG);
        background-size: cover;
        background-position: center;
        max-width: 1680px;
        min-width: 320px; 
        height: 60vh;
        padding-top: 20%;
    }
    #box{
        margin-right: 30%;
        margin-left: 30%;
        min-width: 230px;
        max-width: 1920px;
        padding-top: 30px;
        padding-bottom: 30px;
        background: #0500FF;
        box-shadow: 10px 10px #02007d;
        border-radius: 30px;
        height: 90px;
    }   
    #slogan{
        margin: auto;
        color: #ffffff;
        text-align: center;
    }
`;
