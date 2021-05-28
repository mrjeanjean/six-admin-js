class Api{
    getPage(pageID){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve( {
                    name: "Ma Page",
                    id: pageID,
                    sections: [
                        {
                            id: "section2",
                            type: "title",
                            content: "Mon titre"
                        },
                        {
                            id: "section1",
                            type: "text",
                            content: "Mon contenu"
                        }
                    ]
                })
            }, 2000)
        })
    }
}

export default new Api();
