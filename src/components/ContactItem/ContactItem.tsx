import React from 'react';

interface Props {
  contact: IContactText;
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <div className="mb-4">
      <div className="d-flex gap-3">
        <img style={{ width: 30, height: 30 }} src={contact.avatar} alt="contact-img" />
        <h4>{contact.name}</h4>
      </div>
      <div>{contact.phone}</div>
      <div className="d-flex flex-column">
        { contact.instagram ? <a href={contact.instagram} rel="noreferrer" target="_blank">{contact.instagram}</a> : null}
        { contact.vk ? <a href={contact.vk} rel="noreferrer" target="_blank">{contact.vk}</a> : null }
      </div>
    </div>
  );
};

export default ContactItem;