import { Tooltip, OverlayTrigger, Button, Popover } from 'react-bootstrap'
import React from 'react'
function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
  </Popover>
);

export const OverlayComponent = (props) => (
  <OverlayTrigger
    placement={props.placement}
    delay={{ show: 250, hide: 400 }}
    overlay={props.render}
  >
    {props.component}
  </OverlayTrigger>
);
export const PopoverComponent = (props) => (
  <OverlayTrigger
    placement={props.placement}
    delay={{ show: 250, hide: 400 }}
    overlay={popover}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);

export const TooltipComponent = (props) => (
  <OverlayTrigger
    placement={props.placement}
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);

