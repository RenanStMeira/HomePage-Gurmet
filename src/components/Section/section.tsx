import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SectionStyle, Containner } from './style';
import axios from 'axios';

interface FormData {
    sabor1: string;
    sabor2: string;
    quantidade: number;
    cobertura: string;
}

const Section: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        sabor1: '',
        sabor2: '',
        quantidade: 1,
        cobertura: 'Chocolate',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Enviar dados para o WhatsApp usando o Twilio
        axios.post('https://api.whatsapp.com/send?phone=5518935002592', {
            sabor1: formData.sabor1,
            sabor2: formData.sabor2,
            quantidade: formData.quantidade,
            cobertura: formData.cobertura,
        })
        .then((response) => {
            console.log('Mensagem enviada com sucesso!', response);
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem para o WhatsApp:', error);
        });
    };

    return (
        <SectionStyle>
            <h2>MONTE O SEU E FAÇA SEU PEDIDO</h2>
            <Containner>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="sabor1">Sabor 1</label>
                    <input
                        type="text"
                        id="sabor1"
                        name="sabor1"
                        value={formData.sabor1}
                        onChange={handleChange}
                    />
                    <label htmlFor="sabor2">Sabor 2</label>
                    <input
                        type="text"
                        id="sabor2"
                        name="sabor2"
                        value={formData.sabor2}
                        onChange={handleChange}
                    />
                    <label htmlFor="quantidade">Unidades:</label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        min="1"
                        value={formData.quantidade}
                        onChange={handleChange}
                    />
                        
                    <h3>Escolha a cobertura</h3>
                    <select
                        id="cobertura"
                        name="cobertura"
                        value={formData.cobertura}
                        onChange={handleChange}
                    >
                        <option value="Chocolate">Chocolate</option>
                        <option value="Morango">Morango</option>
                        <option value="Caramelo">Caramelo</option>
                    </select>

                    <div className='container_button'>
                        <button type="submit">Fazer Pedido</button>
                    </div>   
                </form>
            </Containner>
        </SectionStyle>
    );
}

export default Section;
