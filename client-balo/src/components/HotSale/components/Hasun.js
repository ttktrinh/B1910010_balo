import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Hasun(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('hasun');
    const [hotHasun, setHotHasun] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotHasun(data)
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
                   hotHasun ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotHasun)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Hasun;