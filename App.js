
   const parent = React.createElement("div", {id : "parent"}, 
                    React.createElement("div", {id : "child"}, 
                        [React.createElement("h1", {}, "I am H1"), React.createElement("h2", {}, "I am H2")]))  
     
     const heading = React.createElement("h1", {id : "heading"}, "Hii from AKash");
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)
