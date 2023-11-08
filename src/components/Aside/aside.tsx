import Duplo from '../../assets/images/duplo.png';
import Frutas from '../../assets/images/frutas.png';
import Gurmet from '../../assets/images/gourmet.jpeg';
import { AsideContainer, ImagesAside, DivAside } from './style';
import Button from '../Button/button';

export default function Aside() {
    return (
        <AsideContainer>
            <h1>FAÇA SUA ESCOLHA!</h1>
            <DivAside>
                <div>
                    <ImagesAside src={Frutas} alt="Frutas"/>
                    <p>Frutas</p>
                    <Button />
                </div>
                <div>
                    <ImagesAside src={Duplo} alt="Duplo"/>
                    <p>2 Sabores</p>
                    <Button />
                </div>
                <div>
                    <ImagesAside src={Gurmet} alt="Gurmet" />
                    <p>Gurmet</p>
                    <Button />
                </div>
            </DivAside>
            
        </AsideContainer>
    )
}