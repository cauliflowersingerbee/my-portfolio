import React from "react";
import './mailto.scss';

export default class MailTo extends React.Component {  

    //code to add mailto to contact form

    render () {
        const Mailto = ({ email, subject = '', body = '', children }) => {
            let params = subject || body ? '?' : '';
            if (subject) params += `subject=${encodeURIComponent(subject)}`;
            if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
          
            return <a href={`mailto:${email}${params}`}>{children}</a>;
          };
        return (
            <span id='email-link'>
            <Mailto email="okwiri.codes@gmail.com" subject="" body="">
                email
            </Mailto>
            </span>
          );
  
    }
}

