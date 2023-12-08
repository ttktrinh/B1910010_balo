import React from 'react';


function AboutProduct(props) {
    return (
        <div className="detail-intro">
            <div className="detail-intro-title">
                <span>Thông số kỹ thuật</span>
            </div>
            <table className="detail-intro-tskt">
                <tbody>
                    <tr>
                        <td> Kích thước  </td>
                        <td> 43x30x14 cm </td>
                    </tr>
                    <tr>
                        <td> Chất liệu vải </td>
                        <td> nylon+polyeste </td>
                    </tr>
                    <tr>
                        <td> Số ngăn </td>
                        <td>  3</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default AboutProduct;