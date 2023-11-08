import styled from "styled-components";

export const HeaderNav = styled.header`

display: flex;
justify-content: space-around;
padding: 10px;
background: rgb(251,86,112);
background: linear-gradient(90deg, rgba(251,86,112,0.8631827731092436) 40%, rgba(4,195,192,0.9136029411764706) 68%);

    img {
        border-radius: 30px;
    }
`;

export const TitleHeader = styled.header`

font-size: 35px;
margin-top: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
cursor: pointer;
font-style: italic;
text-decoration: underline;
`;

export const DivContact = styled.header`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 200px 150px 0 490px;
width: 50%;
height: 50vh;
border: solid 1px #FC6E84;
border-radius: 15px;
background-color: #ADD8E6;


    label {
        margin: 8px 0;
        font-size: 30px;
        color: #FC6E84;
        font-weight: bold;
    }

    h3 {
        color: #1AC8C6;
        font-size: 30px;
        font-weight: bold;
    }

    button {
        border: none;
        border-radius: 15px;
        padding: 15px 25px;
        font-size: 20px;
        color: white;
        cursor: pointer;
        margin-top: 15px;
        background-color: #FC6E84;
    }
`;