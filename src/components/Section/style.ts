import styled from "styled-components";

export const SectionStyle = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 25px;
background: rgb(251,86,112);
background: linear-gradient(90deg, rgba(251,86,112,0.36738445378151263) 40%, rgba(4,195,192,0.4290091036414566) 68%);

    h2 {
        color: #19C8C5;
        font-weight: bold;
        font-size: 35px;
        text-decoration: underline
        ;
    }

    .container_button {
       display: flex;
       justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        text-align: center;
        font-size: 30px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin: 8px 0;
        border: none;
    }

    input {
        font-size: 22px;
        border-radius: 10px;
        padding: 8px;
        text-align: center;
    }

    h3 {
        color: #FC6D84;
        text-align: center;
        margin: 8px 0;
        font-size: 25px;
        font-weight: bold;
    }

    select {
        padding: 8px;
        text-align: center;
        background-color: #19C8C5;
        color: white;
        font-size: 20px;
    }

    button {
        text-align: center;
        text-decoration: none;
        font-size: 25px;
        border-radius: 15px;
        background-color: #fb5670;
        padding: 8px;
        cursor: pointer;
        color: white;
        border: none;
        margin-top: 17px;
    }
`;

export const Containner = styled.section`
border: solid 0.5px black;
border-radius: 10px;
padding: 20px 150px;
margin-top: 15px;
box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
background: rgb(251,86,112);
background: linear-gradient(90deg, rgba(251,86,112,0.10968137254901966) 40%, rgba(4,195,192,0.09287464985994398) 68%);
`;