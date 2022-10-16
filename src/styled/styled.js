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
