import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact-page-container">
                <div className="contact-row">
                    <div className="contact-full-info">
                        <h1>Contact Info:</h1>
                        <p>To give give beginning divide, cattle. Give moving
                            won't, there the abundantly she'd she'd brought air
                            upon. Light hath subdue. Life days creature upon
                            first heaven gathering dry.
                        </p>
                        <div className="contact-us-info">
                            <p><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</p>
                            <p><strong>Phone:</strong> +44 987 065 908</p>
                            <p><strong>Email:</strong> info@Example.com</p>
                            <p><strong>Fax:</strong> +44 987 065 909</p>
                        </div>
                    </div>
                    <form className="contact-page-form">
                        <div className="form-row-1">
                            <input type="text" placeholder="Your Name" className="input-name"/>
                            <input type="text" placeholder="Your Email" className="input-email"/>
                        </div>

                        <input type="text" placeholder="Your Title" className="input-title"/>
                        <textarea name="message" rows="10" cols="85" className="input-comment" placeholder="Your Comment"></textarea>
                        <input type="submit" className="btn-green full-input-submit" value="SEND MESSAGE"/>

                    </form>
                </div>

                <div className="contact-map">

                </div>
            </section>
        );
    }
}

export default Contact;