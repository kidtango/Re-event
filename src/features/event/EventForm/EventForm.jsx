import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { createVerify } from "crypto";

class EventForm extends Component {
  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onInputChange = e => {
    const { event } = this.state;

    event[e.target.name] = e.target.value;
    this.setState({ event });
  };

  onFormSubmit = e => {
    const { createEvent } = this.props;
    e.preventDefault();

    createEvent(this.state.event);
    console.log("clicked");
  };
  render() {
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="First Name"
              name="title"
              value={event.title}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              name="date"
              value={event.date}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              name="city"
              value={event.city}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              name="venue"
              value={event.venue}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              name="hostedBy"
              value={event.hostedBy}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
