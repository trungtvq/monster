import React from 'react'
import {  OverlayTrigger, Popover, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSurprise,faUserCircle,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
class UserDropdownBtn extends React.Component {
    render() {
        return (

            <div>
                
                <OverlayTrigger
                    trigger="click"
                    key="bottom"
                    placement="bottom"
                    overlay={<Popover id={`popover-positioned-bottom`}>
                        <Popover.Title as="h3">Signed in as Trung</Popover.Title>
                        <Popover.Content>
                                <Button variant="outline-info"><FontAwesomeIcon icon={faSurprise} /> Set status</Button>{' '}
                        </Popover.Content>

                        <Popover.Content>
                            Your profile
                        </Popover.Content>
                        <Popover.Content>
                            Your task
                        </Popover.Content>

                        <hr />

                        <Popover.Content>
                            Your task
                        </Popover.Content>
                        <Popover.Content>
                        <div><FontAwesomeIcon icon={faSignOutAlt} />  Notification</div>
                        </Popover.Content>
                        <Popover.Content>
                        <Button variant="outline-danger"><FontAwesomeIcon icon={faSignOutAlt} />  Sign out</Button>{' '}
                        </Popover.Content>
                    </Popover>}
                >
                    <FontAwesomeIcon icon={faUserCircle} />

                </OverlayTrigger>{' '}
            </div>

        )
    }
}
export default UserDropdownBtn;