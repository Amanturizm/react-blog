import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from "../../axiosApi";
import ContactItem from "../../components/ContactItem/ContactItem";

const Contacts = () => {
  const [contacts, setContacts] = useState<IContactText[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axiosApi.get<IResponseContact>('/contacts.json');

      setContacts(
        data ? Object.keys(data).map((id: string) => ({ ...data[id], id })) : []
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const preloader = loading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;

  return (
    <div className="m-5">
      {
        contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
      }

      {preloader}
    </div>
  );
};

export default Contacts;