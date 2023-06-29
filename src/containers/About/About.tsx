import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const About = () => {
  const [content, setContent] = useState<IAboutText[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosApi.get('/about.json');

      setContent(Object.values(data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const getFullTextJSX = (aboutText: IAboutText) => {
    const paragraphs = [];

    for (let i = 1; i < Object.keys(aboutText).length; i++) {
      paragraphs.push(aboutText['paragraph' + i]);
    }

    return (
      <div key={`about-${aboutText.title}`}>
        <h1>{aboutText.title}</h1>
        <hr />
        { paragraphs.map((paragraph, i) => <p key={`${aboutText.title}-paragraph${i}`}>{paragraph}</p>) }
      </div>
    );
  };

  return (
    <div className="about m-5">
      { content.length ? content.map(text => getFullTextJSX(text)) : null }
    </div>
  );
};

export default About;