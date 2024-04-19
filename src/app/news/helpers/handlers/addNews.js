export const handleAddNews =async (newNewsName,setNews, setNewNewsName , onClose ) => {
     
    try{
        const res = await fetch('/api/news', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNewsName) })
            
  
    } catch (error){
        console.error(error)
    }
    setNewNewsName("");
    onClose();
  }
  