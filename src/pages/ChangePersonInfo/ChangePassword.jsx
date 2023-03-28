import React from 'react'

export default function ChangePassword() {
    return (
        <div className='change-avatar'>
            <h4>NOTE</h4>
            <p>Your personal information must be authentic, any changes in your personal information, please notify HR of the company for correction.
                We would like to ensure that we only use your personal information for the company's work, all acts of disclosing your personal information to the outside are illegal.
                Read more about company policy at: Policy.</p>

            <div className='change-password-content'>
                <form method="post" encType="multipart/form-data" action="/admin/employee/change-password">
                    
                    <div className="mb-3">

                        <input className="password"  />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-success">Change</button>
                    </div>
                    <input name="__RequestVerificationToken" type="hidden" defaultValue="CfDJ8MENIrR8zINPp2TAAOn6QJeyf1TYdwdB2TEb4p11z5BSWB1IiITGYZb4rNTBNQl_Q_0Foqzt6XYzoG_uxVC9bVlmLOEdzE2y1Ld3MtsNG9EHeMnVtfb5yUddp7emwnFhMT9k2CBsYXp8RMoIQerzmTI" />
                </form>
            </div>
        </div>
        )
}
