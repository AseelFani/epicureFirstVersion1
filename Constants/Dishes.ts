import PadKiMao from '../assets/Dishes/PadKiMao.svg';
import TaMaLaKo from '../assets/Dishes/taMaLaKo.png';
import RedFarm from '../assets/Dishes/RedFarm.png';
import PadKiMaoUs from '../assets/Dishes/padKiMaoUS.png';
import Frito from '../assets/Dishes/Frito.svg';
import Smoked from '../assets/Dishes/Smoked.svg';
import Spicy from '../assets/Dishes/Signature/Spicy.png';
import Vegan from '../assets/Dishes/Signature/Vegan.png';
import { IDish } from '../Components/Intefaces/IDish';


export const Dishes:IDish[]=[
    {
        name:'Pad Ki Mao',
        description:'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
        imag:PadKiMao,
        signature:Spicy,
        price:'₪88'
    },
    {
        name:'Ta Ma La Ko',
        description:'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
        imag:TaMaLaKo,
        price:'₪65'
    },
    {
        name:'Red Farm',
        description:'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
        imag:RedFarm,
        price:'₪65'
    },
    
    {
        name:'Pad Ki Mao - US',
        description:'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
        imag:PadKiMaoUs,
        price:'₪65'
    },
    {
        name:'Garbanzo Frito',
        description:'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
        imag:Frito,
        price:'₪98'
    },
    
    {
        name:'Smoked Pizza',
        description:'Basil dough, cashew "butter", demi-glace, bison & radish',
        imag:Smoked,
        signature:Vegan,
    },
    
    
];

