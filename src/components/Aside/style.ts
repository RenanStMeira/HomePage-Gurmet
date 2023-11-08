import styled from "styled-components";

export const AsideContainer = styled.aside`

display: flex;
flex-direction: column;
justify-content: center;
background: rgb(251,86,112);
background: linear-gradient(90deg, rgba(251,86,112,0.36738445378151263) 40%, rgba(4,195,192,0.4290091036414566) 68%);

    h1 {
        text-align: center;
        margin: 30px 0;
        font-size: 45px;
        color: #04c3c0;
    }
`;


export const DivAside = styled.aside`

display: flex;
justify-content: center;
margin-top: 50px;
gap: 30px;

    p {
        text-align: center;
        font-size: 30px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
`;

export const ImagesAside = styled.img`
width: 350px;
height: 220px;
border-radius: 30px;
`;

export const ModalComponent = styled.aside`
`