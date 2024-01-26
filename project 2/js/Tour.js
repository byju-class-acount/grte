AFRAME.registerComponent("tour",{
    init:function(){
        this.placesContainer = this.el
        this.createcards()
        console.log('e')
    },
    createcards:function(){
        const thumbnailsRef = [
            {id:"taj_mahal",title:"Spider Man",url:"assets/thumbnails/taj_mahal.png"},
            {id:"new_york",title:"Ice Man",url:"assets/thumbnails/new_york_city.png"},
            {id:"eiffel_tower",title:"Super Man",url:"assets/thumbnails/eiffel_tower.jpg"},
            {id:"budapest",title:"The Flash",url:"assets/thumbnails/budapest.jpg"},
        ]
        let previousxpos = -60 
        for(var item of thumbnailsRef){
            const posX = previousxpos +25 
            const posY = 10
            const posZ = -40
            const position = {x:posX,y:posY,z:posZ}
            previousxpos = posX
            const borderel = this.createborder(position,item.id)
            const thumbnails = this.createthumbnail(item)
            borderel.appendChild(thumbnails)
            const title = this.createtitle(position,item)
            borderel.appendChild(title)
            this.placesContainer.appendChild(borderel)
        }
    },
    createborder:function(pos,id){
        const entityel = document.createElement("a-entity")
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("position",pos)
        entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityel.setAttribute("material",{color:"#00bcd4",opacity:0.4})
        entityel.setAttribute("cursor-listener",{})
        return entityel

    },

    createthumbnail:function(item){
        const entityel = document.createElement("a-entity")
        
        entityel.setAttribute("visible",true)
       
        entityel.setAttribute("geometry",{primitive:"circle",radius:9})
        entityel.setAttribute("material",{src:item.url})
        return entityel

    },

    createtitle:function(pos,item){
        const entityel = document.createElement("a-entity")
        
        entityel.setAttribute("visible",true)
        
        entityel.setAttribute("text",{font:"exo2bold",align:"center",width:60,color:"#e65100",value:item.title})
        const elposition = pos
        elposition.y = -20
        entityel.setAttribute("position",elposition)
        return entityel

    },

})