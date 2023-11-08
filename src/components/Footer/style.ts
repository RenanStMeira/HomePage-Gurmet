import styled from "styled-components";

export const FooterComponet = styled.footer`
display: flex;
flex-direction: column;
background: rgb(251,86,112);
background: linear-gradient(90deg, rgba(251,86,112,0.8631827731092436) 40%, rgba(4,195,192,0.9136029411764706) 68%);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top: 25px;
        margin-bottom: 15px;
    }
`; 

export const DivImage = styled.footer`
display: flex;
gap: 25px;
margin: 20px 0;
justify-content: center;
align-items: center;

    img {
            width: 350px;
            height: 220px;
            border-radius: 15px;
        }
    
    img:hover {
        transform: scale(1.1)
    }
`;