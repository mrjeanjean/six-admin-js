class Api{
    getPage(pageID){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve( {
                    title: "Ma Page",
                    id: pageID,
                    sections: [
                        {
                            id: "section2",
                            type: "heading",
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

    update(resource){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve( resource)
            }, 2000)
        })
    }
}

export default new Api();
