import  { useState, useEffect } from 'react';
import Media from './Media';
import { initialContent, loadedContent } from './Content';

function Facebook() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(initialContent);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(loadedContent);
      setLoading(false);
      
    }, 3000); // Set the loading time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Media loading={loading} content={content} />
    </div>
  );
}

export default Facebook;
