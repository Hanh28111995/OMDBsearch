import React from 'react'
import { useParams } from 'react-router-dom'
import logo from '../../assets/imgs/Logo__001_no_bg.png'
import ManagerSignature from '../../assets/imgs/Pending.png'
import HRSignature from '../../assets/imgs/Approved.png'

export default function TimeOffExp(props) {
    const param = useParams();
    return (
        <div className='mp_ex_form'>
            <form
                method="post"
                action="/admin/employee/misspunch_detail/E20230302081224806"
            >
                <div style={{ height: '20px' }} />
                <div className="c">
                    <img src={logo} />
                </div>
                <div className="c">
                    <div>Phone: 909-632-1643</div>
                    <div>Fax: 909-632-1208</div>
                </div>
                <div style={{ height: '10px' }} />
                <div className="f-h">TIME OFF - {param.yourname} - {param.referenceCode}</div>
                <div style={{ height: '20px' }} />
                <div style={{ height: '20px' }} />
                <div className="f"><div className="w-75">
                    <div className="c f border-none">
                        <table className="m-auto">
                            <tbody>
                                <tr>
                                    <td className="p-10-20 border">Punch In:</td>
                                    <td className="p-10-20 border">03/01/2023 07:30:00 AM</td>
                                </tr>
                                <tr>
                                    <td className="p-10-20 border">Start Lunch:</td>
                                    <td className="p-10-20 border" />
                                </tr>
                                <tr>
                                    <td className="p-10-20 border">End Lunch:</td>
                                    <td className="p-10-20 border" />
                                </tr>
                                <tr>
                                    <td className="p-10-20 border">Punch Out:</td>
                                    <td className="p-10-20 border">03/01/2023 11:30:00 AM</td>
                                </tr><tr><td className="p-10-20 border">Reason:</td>
                                    <td className="p-10-20 border">first day of work</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    <div className="w-25">
                        <div><b>Manager Note:</b></div>
                        <div className="r p-lr-10"><i /></div>
                        <div><b>HR Note:</b></div>
                        <div className="r p-lr-10"><i /></div>
                    </div>
                </div>
                <div style={{ height: '30px' }} />
                <div style={{ height: '30px' }} />
                <div className="container c text-danger">Please assure your information to be correct because any change in working hours will affect your pay this month.</div>
                <div style={{ height: '20px' }} />
                <div className="f">
                    <div className="w-50 c">
                        <div className="b">Manager Signature</div>
                        <div>
                            <img src={ManagerSignature} style={{ height: 100 }} />
                        </div>
                    </div>
                    <div className="w-50 c">
                        <div className="b">Hr Signature</div>
                        <div>
                            <img src={HRSignature} style={{ height: 100 }} />
                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }} />
                <div style={{ height: '20px' }} />
                <div className="f">
                    <div className="w-10 m-auto">
                        <input type="submit" className="btn bgr-success h-30" defaultValue="Export" /></div>
                </div>
                <input name="__RequestVerificationToken" type="hidden"
                    defaultValue="CfDJ8MENIrR8zINPp2TAAOn6QJeI928QlYZN6yJ-HPM25BIvftqVE8_2F6pX9uzV8QZ5-4Tx7OM7m9N8Z1wuFZwYrqaouViNCrzMzMW8jrEIzBwIrvCsb9j2ap_t9Qjntc6jPpX3FHaP9GjYgDUxeJzmLns" />
            </form>
        </div>

    )
}
