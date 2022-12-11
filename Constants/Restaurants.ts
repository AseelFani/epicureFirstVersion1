import Claro from '../assets/Cards/claro.png';
import Claro2 from '../assets/Cards/claro2.png';
import KabKem from '../assets/Cards/KabKem.png';
import KabKem2 from '../assets/Cards/KabKem2.png';
import Messa from '../assets/Cards/Messa.png';
import Messa2 from '../assets/Cards/Messa2.png';
import nithanThai from '../assets/Cards/nithan-thai.png';
import Yapan from '../assets/Cards/Yapan.png';
import TigerLily from '../assets/Cards/tiger-lily.svg';
import Lumina from '../assets/Cards/Lumina.svg';
import OpenNow from '../assets/openNow.png';
import four from '../assets/Rating/four.png';
import two from '../assets/Rating/two.png';
import one from '../assets/Rating/one.png';
import { Restaurant } from '../Components/Intefaces/IRestaurant';
import { on } from 'events';


export const Restaurants:Restaurant[]=[
    {
        name:'Claro',
        chef:'Ran Shmueli',
        imag:Claro,
        openNow:OpenNow,
        rating:four,
    },
    {
        name:'Kab Kem',
        chef:'Yariv Malili',
        imag:KabKem,
        rating:one,
    },
    {
        name:'Messa',
        chef:'Aviv Moshe',
        imag:Messa,
        rating:one, 
    },
    
    {
        name:'Nitan Thai',
        chef:'Shahaf Shabtay',
        imag:nithanThai,
        rating:one,
    },
    {
        name:'Lumina',
        chef:'Meir Adoni',
        imag:Lumina,
        rating:one,
    },
    
    {
        name:'Tiger Lilly',
        chef:'Yanir Green',
        imag:TigerLily,
        rating:four,
    },
    {
        name:'Ya Pan',
        chef:'Yuval Ben Moshe',
        imag:Yapan,
        rating:two,
    },
    {
        name:'Claro - U.S',
        chef:'Ran Shmueli',
        imag:Claro2,
        rating:one,
    },
    {
        name:'Kab Kem - U.S',
        chef:'Yariv Malili',
        imag:KabKem2,
        rating:two,
    },
    {
        name:'Messa - U.S',
        chef:'Aviv Moshe',
        imag:Messa2,
        rating:one,
    },
    
    
];

