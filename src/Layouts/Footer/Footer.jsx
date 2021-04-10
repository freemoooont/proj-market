import React from 'react'
import './footer.css'

function Footer(){
    return (
        <footer className='footer'>
           <div className="container">
                <div className="footer_left">
                    <div className="footer_left-top">
                        Федеральное государственное бюджетное образовательное учреждение высшего образования
                    </div>
                    <div className="footer_left-bottom">
                        “Иркутские национальный исследовательский технический университет”
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_right-top">
                        Контакты:
                    </div>
                    <div className="footer_right-bottom">
                        <ul>
                            <li>664074, г. Иркутск, ул. Лермонтова 83</li>
                            <li>Телефон: +7 (3952) 405-000</li>
                            <li>Факс: +7 (3952) 405-100</li>
                            <li>Справочная: +7 (3952) 405-009</li>
                            <li>E-mail: info@istu.edu</li>
                        </ul>
                    </div>
                </div>
           </div>
        </footer>
    )
}

export default Footer