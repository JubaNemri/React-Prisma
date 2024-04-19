 
export const handleDeleteNews = (id, setNews) => {
    
    setNews((prev) => {
        const update = [...prev];
        return update.filter(news => news.id !== id ); 
    });

    // setNews((prev) => prev.filter(news => news.id !== id ));
}