class Cardnews extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("id", "containerMain");

        this.buildCardLeft(componentRoot);  
        this.buildCardRight(componentRoot);
        
        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            *{
                margin: 0;
                padding: 0;
                font-family: "Roboto", sans-serif;
            }

            #containerMain {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                box-shadow: 7px 7px 31px -3px rgba(0,0,0,0.6);
                -webkit-box-shadow: 7px 7px 31px -3px rgba(0,0,0,0.6);
                -moz-box-shadow: 7px 7px 31px -3px rgba(0,0,0,0.6);
            }
            
            .divMain {
                margin: 0 1rem;
            }
            
            .autor {
                margin-bottom: 1rem;
                color: rgb(70,70,70)
            }
            
            .tituloPost {
                font-size: xx-large;
                font-weight: 700;
                margin: 0;
                text-decoration: none;
                color: black;
            }
            
            .resumoPost {
                margin-top: .2rem;
                color: rgb(70,70,70)
            }
            
            .divImg {
                display: flex;
                justify-content: center;
            }

            .divImg > img {
                width: 100%;
                margin-left: auto;
            }
        `

        return style;
    }

    buildCardLeft(parent) { 
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "divMain");

        const autor = document.createElement("p");
        autor.setAttribute("class", "autor");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.setAttribute("class", "tituloPost");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.setAttribute("class", "resumoPost");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        parent.appendChild(cardLeft);
    }

    buildCardRight(parent) {
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "divImg");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/l60Hf-1298086416.png";
        newsImage.alt = this.getAttribute("alt");
        
        cardRight.appendChild(newsImage);

        parent.appendChild(cardRight);
    }
}

customElements.define('card-news', Cardnews);
