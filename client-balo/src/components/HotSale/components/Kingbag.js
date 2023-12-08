import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Kingbag(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('kingbag');
    const [hotKingbag, setHotKingbag] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotKingbag(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale kingbag">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotKingbag ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotKingbag)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Kingbag;