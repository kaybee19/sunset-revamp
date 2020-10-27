import React from 'react'
import { Button, Accordion } from 'react-bootstrap'

export default class sunsetFAQ extends React.Component {

	render() {

		const address = <a
                href="https://www.google.com/maps/place/Retro+Africa/@9.0538793,7.5268466,19z/data=!4m8!1m2!3m1!2sThe+Pavilion+Restaurant!3m4!1s0x0:0xa2816ee40c020fba!8m2!3d9.0541956!4d7.5267439"
                title="Pavillion"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
              	Google Maps
              </a>;

		const faq = [
		{question: "Do you have a covid-19 policy?", answer: "Yes! Sunset Drive operates as a safe business and together with Pavillion, we keep in line with the current restrictions and guidelines specified by the Nigerian governement."},
		{question: "What time does the gate open and movie start?", answer: "As an outdoor cinema, we screen our movies in the evenings; as soon as the sun begins to set. The gates are open as early as 5:00pm."},
		{question: "Where can I buy tickers?", answer: "We cater to private screenings and events exclusively. Please contact us for more information on scheduling and cost."},
		{question: "Do you do walk-ins?", answer: "Our screenings are generally held by private groups who are do not interested in outsiders attending."},
		{question: "What if I am no longer able to attend?", answer: "You are able to reschedule to another FREE date. However, refunds are not available if you are no longer able to attend or change your mind."},
		{question: "What if it rains?", answer: "Sunset Drive-In is an outdoor event, and part and parcel of that is being open to all the elements mother nature may throw at us; including unpredictable weather changes at any moment. We only cancel screenings in extremely bad weather where danger presents itself to our patrons and staff. We encourage you to check the forecast before scheduling! Coming to an outdoor event always has its weather risks. You accept, by scheduling, that you acknowledge the unpredictability of the weather and no refunds will be given if you do not find the weather satisfactory."},
		{question: "How do I get to Sunset Drive?", answer: 'Please see our address above, or check us on'},
		{question: "Is there space for parking?", answer: "Parking is limited inside the venue, but spots are available outside the premesis at Pavillion."},
		{question: "What food and drinks are available?", answer: "There is a range of food and drinks available every screening night. Our food partner Pavillion has a wide range of affordable food items to select from."},
		{question: "Can I bring my own food and drinks?", answer: "Outside food and drinks are not permitted into the venue. Our food partner has food and drinks to cater for the whole event. Please contact for more details on food packages and prices."},
		{question: "What should I bring?", answer: "To fully enjoy your Sunset experience, you can bring a blanket for those chillier spring nights, or bring your own mats. If not available, mats and chairs will be provided at the venue."},
		{question: "Can I smoke or vape?", answer: "Pavillion is a smoke-free area and we do not allow smoking or vaping at Sunset Drive-In."},
		{question: "I think I lost something at the cinema.", answer: "If you’re still on-site and can’t find something, report it to one of our staff immediately and leave your details. If you have already left the cinema, please reach out to us as soon as possible and we will have our staff look for you."},
		]

		return (
      <div className="screenBG" id="faq">
				<p className="bigText noodleText">Frequently Asked Questions</p>
				{
					faq.map((f, index) => (
						<Accordion key={index}>
							<div className="faqCont col-10 colFix">
					      <Accordion.Toggle as={Button} variant="link" eventKey="0">
					        <h6>&#9900; {f.question}</h6>
					      </Accordion.Toggle>
						    <Accordion.Collapse eventKey="0">
						      <p style={{ color: 'gray' }}>{f.answer} {index === 6 ? address : ""}</p>
						    </Accordion.Collapse>
							</div>
						</Accordion>
					)
				)}
			</div>
		);
	}
}
