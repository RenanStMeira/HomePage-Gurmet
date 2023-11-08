import Duplo from '../../assets/images/duplo.png'
import Fruts from '../../assets/images/frutas.png'
import Gurmet from '../../assets/images/gourmet.jpeg'
import March from '../../assets/images/Marchi.jpg'
import { FooterComponet, DivImage } from './style';

export default function Footer() {
    return(
        <FooterComponet>
            <DivImage>
                <img src={Duplo} alt="" />
                <img src={Fruts} alt="" />
                <img src={Gurmet} alt="" />
                <img src={March} alt="" />
            </DivImage>
            <div>
                <p>Geladinho da Ana &#169;</p>
            </div>
        </FooterComponet>
    )
}