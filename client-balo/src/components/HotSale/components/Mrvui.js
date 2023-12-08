import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Mrvui(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('mrvui');
    const [hotMrvui, setHotMrvui] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotMrvui(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                   hotMrvui ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotMrvui)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Mrvui;