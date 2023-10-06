import React from 'react';
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [
    {
    name: "FirstName",
    title: "Prénom:",
    type: "text"
  }, 
  {
    name: "LastName",
    title: "Nom:",
    type: "text"
  },
  {
    name: "Mail",
    title: "Mail:",
    type: "text"
  },
  {
    name: "Passeword",
    title: "Mot de passe:",
    type: "text"
  }
]
};

const Contact = () => {
    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        console.log(results);
      }, []);
      survey.onComplete.add(alertResults);
    return (
        <div>
            <Survey model={survey} />;
        </div>
    );
}

export default Contact;