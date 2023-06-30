import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import ContactItem from "../../components/ContactItem/ContactItem";

const Contacts = () => {
  const [contacts, setContacts] = useState<IContactText[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosApi.get<IResponseContact>('/contacts.json');

      setContacts(
        data ? Object.keys(data).map((id: string) => ({ ...data[id], id })) : []
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="m-5">
      {
        contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
      }
    </div>
  );
};

export default Contacts;