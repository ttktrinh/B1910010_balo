import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';


function Sakos(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('sakos');
    const [hotSakos, setHotSakos] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotSakos(data)
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
                    hotSakos ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotSakos)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Sakos;