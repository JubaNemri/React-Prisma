export const handleAjouterNews = (newNewsName,setNews, setNewNewsName , onClose ) => {
  setNews((prev) => {

    const news = [...prev];
    const nouvelleNews = {
      id: news.length + 1,
      name: newNewsName
    }; 
    
    return [...prev, nouvelleNews];
  });
  setNewNewsName("");
  onClose();
}

