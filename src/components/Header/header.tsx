import { HeaderNav, TitleHeader, DivContact } from './style';
import Logo from '../../assets/images/logo.jpeg';
import Modal from 'react-modal';
import { useState } from 'react';


export default function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return (
        <HeaderNav>
            <img src={Logo} alt="logo" width={100}/>
            <TitleHeader>Geladinho Da Ana</TitleHeader>
            <p onClick={openModal} className='login-button'>
                <TitleHeader>Contato</TitleHeader>
            </p>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='contact'
                className='modal contact-modal'
            >
            <DivContact>
                <h3>Telefone:</h3>
                <label htmlFor="">(18) 99777-7116</label>
                <h3>Email:</h3>
                <label htmlFor="">anaa.paula.oliver@gmail.com</label>
                <h3>Endereço:</h3>
                <label htmlFor="">Rua Estela, 27 - Jardim Santa Monica - Alfredo Marcondes SP</label>
            
                <button onClick={closeModal}>
                Fechar
                </button>
            </DivContact>
            </Modal>
        </HeaderNav>
    )
}