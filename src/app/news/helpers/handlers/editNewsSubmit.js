export const handleEditNewsSubmit = (editedNews, setNews, onClose) => {
    setNews(prevNews => {

      const updatedNews = prevNews.map(news => {
        if (news.id === editedNews.id) {
          return editedNews;
        }
        return news;
      });

      return updatedNews;
    });

    onClose();
  };
  