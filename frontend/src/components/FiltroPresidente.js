import React, { Component } from 'react';
import { ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
export default class FiltroPresidente extends Component {
    render(){
        return(
            <ToggleButtonGroup name="privilegioRadio" type="checkbox">
                <ToggleButton variant="light" value={1}>Ancião</ToggleButton>
                <ToggleButton variant="light" value={2}>Servo</ToggleButton>
            </ToggleButtonGroup>
        )
    };
}