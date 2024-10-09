import styled from 'styled-components';

export const ItemContainer = styled.div`

    width: 100%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        border-bottom: 0;
        transition: color ease-in-out .3s;
    }

    a:hover {
        opacity: 0.85;
    }

    a.link-repositorio {
        color: #008cff;
    }

    a.link-repositorio:hover {
        border-bottom: 1px solid #008cff;
    }

    a.remover {
        color: #FF0000;
        margin-top: 20px;
    }

    a.remover:hover {
        border-bottom: 1px solid #FF0000;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

`