import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Travelking(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('travelking');
    const [hotTravelking, setHotTravelking] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotTravelking(data)
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
                   hotTravelking ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotTravelking)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Travelking;